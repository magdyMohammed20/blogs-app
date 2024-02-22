import { AlertParent, AlertParagraph, AlertInnerParent } from "./elements";
import { CheckCircle2 } from "lucide-react";

// ReUsable Alert Component To Used With Add / Update / Delete Article
const Alert = ({ showAlert, message }) => {
  return (
    <AlertParent
      className={`transition-all ease-in-out duration-700 ${
        showAlert ? "right-3" : "-right-full"
      }`}>
      <AlertInnerParent>
        <CheckCircle2 className="text-green-900" />
        <AlertParagraph>{message}</AlertParagraph>
      </AlertInnerParent>
    </AlertParent>
  );
};

export default Alert;
