import { CODE_TEMPLATE } from "../components/constants";
import EditorComponent from "../components/EditorComponent";
import Footer from "../components/Footer";

export default function Main() {
  return (
    <div>
      <EditorComponent
        btnState={false}
        lang={"javascript"}
        template={CODE_TEMPLATE.javascript}
      />
    </div>
  );
}
