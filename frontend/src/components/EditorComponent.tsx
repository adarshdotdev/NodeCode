import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import { CODE_TEMPLATE } from "./constants";
import SwitchBtn from "./SwitchBtn";
import { v4 as uuidv4 } from "uuid";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function EditorComponent({ btnState, lang, template, id = "" }) {
  const [btnActive, setBtnActive] = useState(btnState);
  const [language, setLanguage] = useState(lang);
  const [code, setCode] = useState(template);
  const editorRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  console.log(btnActive);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    editor.focus();
  }

  function handleEditorChange(value, event) {
    setCode(value);

    setBtnActive(false);
  }

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    setCode(CODE_TEMPLATE[lang]);
  };

  const saveData = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Add the Content-Type header to specify JSON
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(response.status);
      }

      const result = await response.json();

      return result;
    } catch (error) {
      console.error(error);
    }
  };
  const handleClick = async () => {
    setBtnActive(true);
    // create id and push the code into databasde
    const data = {};
    if (params.id) {
      data.id = params.id;
      data.code = code;
      data.language = language;
      // updateData()
    } else {
      data.id = uuidv4();
      data.code = code;
      data.language = language;
      const result = await saveData(data);
      navigate(`/${result.id}`);
    }
  };

  return (
    <div className=" bg-white border border-[#CED6E1] p-4 rounded-xl md:w-[80%]   max-w-[950px] h-full mx-auto ">
      <div className="  ">
        <Editor
          onMount={handleEditorDidMount}
          onChange={handleEditorChange}
          language={language}
          value={code}
          className="min-h-[450px]   bg-yellow-300"
        />
      </div>

      <div className="   flex justify-between items-center">
        <div>
          <SwitchBtn
            language={language}
            handleLanguageChange={handleLanguageChange}
          />
        </div>
        <div className="flex items-center justify-center gap-3   ">
          {id !== "" && (
            <button
              onClick={() => {
                navigator.clipboard.writeText(id);
                alert("Copied!");
              }}
              className="px-4 py-2  flex items-center gap-1 rounded-3xl transition-transform duration-200 hover:scale-95 hover:bg-[#CED6E1]"
            >
              <img src="/link.svg" alt="icon" />
              <p>{"..." + id.slice(-15)}</p>
            </button>
          )}
          <button
            onClick={handleClick}
            type="button"
            disabled={btnActive}
            className={`
           disabled:bg-gray-400 disabled:cursor-not-allowed transition-transform duration-200 hover:scale-95
          text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300   rounded-3xl text-sm px-6 py-2 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex gap-2 items-center`}
          >
            <img src="/Share.svg" alt="icon" width={20} />
            <span className="text-lg ">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}
