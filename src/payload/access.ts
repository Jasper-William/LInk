import type { Access, GlobalConfig } from "payload";

export const publicRead: Access = () => true;
export const authenticated: Access = ({ req }) => Boolean(req.user);

export const globalAccess: GlobalConfig["access"] = {
  read: () => true,
  update: ({ req }) => Boolean(req.user),
};
