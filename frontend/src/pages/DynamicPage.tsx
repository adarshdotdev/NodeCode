import { useParams } from "react-router-dom";
import { CODE_TEMPLATE } from "../components/constants";
import EditorComponent from "../components/EditorComponent";
import { useState } from "react";

export default function () {
  const [code, setCode] = useState("javascript");

  const { id } = useParams();
  // fetch code from the database with id
  return (
    <div className="  border-red-500">
      <EditorComponent
        id={id}
        btnState={true}
        lang={code}
        template={CODE_TEMPLATE.javascript}
      />
    </div>
  );
}
