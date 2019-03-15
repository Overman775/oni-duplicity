import * as React from "react";

import { WithTranslation, withTranslation } from "react-i18next";

import Chip from "@material-ui/core/Chip";

import AbstractEditStatus from "@/services/oni-save/components/AbstractEditStatus";

type Props = WithTranslation;
const SaveExampleChip: React.SFC<Props> = ({ t }) => (
  <AbstractEditStatus>
    {({ isMock }) => (
      <div>
        {isMock && (
          <Chip
            color="secondary"
            label="Example"
            title="This is example content and cannot be saved."
          />
        )}
      </div>
    )}
  </AbstractEditStatus>
);

export default withTranslation()(SaveExampleChip);
