import { MIUrl, MIPath } from './constant';

export const icon = async () => {
  const res = await fetch(`${MIUrl.BASE}${MIPath.Icon}`);
  const icon = await res.blob();
  return icon;
};
