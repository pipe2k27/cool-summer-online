import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { RiWhatsappFill } from "react-icons/ri";
import "./styles.css";

function TooltipBS() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Contactanos
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="left"
      delay={{ show: 250, hide: 300 }}
      overlay={renderTooltip}
    >
      <Button variant="success">
        <a
          href="https://api.whatsapp.com/send?phone=5491144949207&amp;text=Buen%20día,%20te%20hago%20una%20consulta:"
          target="_blank"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/wa-icon.png"}
            alt="w"
            className="waIcon"
          ></img>
        </a>
      </Button>
    </OverlayTrigger>
  );
}

export default TooltipBS;
