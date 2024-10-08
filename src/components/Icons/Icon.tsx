import { IconPropTypes } from "../../lib/types";
import Icons from "./Icons";

export default function Icon({
  name,
  ...props
}: IconPropTypes & { name: keyof typeof Icons }) {
  const Icon = Icons[name];
  const exportedIcon = <Icon {...props} />;
  return exportedIcon;
}
