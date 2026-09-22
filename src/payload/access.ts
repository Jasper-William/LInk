import type { Access, GlobalConfig } from "payload";

export const publicRead: Access = () => true;
export const isAuthenticated = ({ req }: Parameters<Access>[0]): boolean => Boolean(req.user);

export const globalAccess: GlobalConfig["access"] = {
  read: () => true,
  update: isAuthenticated,
};
