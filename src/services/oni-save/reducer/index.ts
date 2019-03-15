import reduceReducers from "reduce-reducers";

import changeGeyserTypeReducer from "./change-geyser-type";
import cloneDuplicantReducer from "./clone-duplicant";
import copyBehaviorsReducer from "./copy-behaviors";
import deleteLooseMaterial from "./delete-looe-material";
import importWarnChecksumReducer from "./import-warn-checksum";
import loadExampleSaveReducer from "./load-example";
import mergeBehaviorsReducer from "./merge-behaviors";
import modifyBehaviorReducer from "./modify-behavior";
import parseProgressReducer from "./parse-progress";
import pasteBehaviorsReducer from "./paste-behaviors";
import receiveOniSaveReducer from "./receive-onisave";

export default reduceReducers(
  changeGeyserTypeReducer,
  cloneDuplicantReducer,
  copyBehaviorsReducer,
  deleteLooseMaterial,
  importWarnChecksumReducer,
  loadExampleSaveReducer,
  mergeBehaviorsReducer,
  modifyBehaviorReducer,
  parseProgressReducer,
  pasteBehaviorsReducer,
  receiveOniSaveReducer
);
