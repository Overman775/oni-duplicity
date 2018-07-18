import {
  AlignSelfProps,
  JustifySelfProps,
  SpaceProps,
  alignSelf,
  justifySelf,
  space
} from "styled-system";

import styled from "@/theme";

import { TextCssProps, text } from "@/theme";

import { attachProps } from "@/utils";

export type TextProps = TextCssProps &
  AlignSelfProps &
  JustifySelfProps &
  SpaceProps;
const Text = styled<TextProps, "span">("span")`
  ${text};
  ${alignSelf};
  ${justifySelf};
  ${space};
`;
Text.displayName = "Text";
export default attachProps(Text, {
  H4: Text.withComponent("h4") as StyledWithComponentTag<"h4", TextProps>,
  Label: Text.withComponent("label") as StyledWithComponentTag<
    "label",
    TextProps
  >,
  Div: Text.withComponent("div") as StyledWithComponentTag<"div", TextProps>
});
