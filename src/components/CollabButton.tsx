import clsx from "clsx";
import { ToolButton } from "./ToolButton";
import { t } from "../i18n";
import { useDeviceType } from "../components/App";
import { users } from "./icons";

import "./CollabButton.scss";

const CollabButton = ({
  isCollaborating,
  collaboratorCount,
  onClick,
}: {
  isCollaborating: boolean;
  collaboratorCount: number;
  onClick: () => void;
}) => {
  return (
    <>
      <ToolButton
        className={clsx("CollabButton", {
          "is-collaborating": isCollaborating,
        })}
        onClick={onClick}
        icon={users}
        type="button"
        title={t("labels.liveCollaboration")}
        aria-label={t("labels.liveCollaboration")}
        showAriaLabel={useDeviceType().isMobile}
      >
        {isCollaborating && (
          <div className="CollabButton-collaborators">
            {collaboratorCount || 1}
          </div>
        )}
      </ToolButton>
    </>
  );
};

export default CollabButton;
