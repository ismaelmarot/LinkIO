import "styled-components";
import { Theme } from "../constants";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
