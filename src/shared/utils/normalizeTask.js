import { priorities } from "../consts";

export const normalizeTaskFields = (data) => {
  if (typeof data?.completed === "string" && data.completed.match(/true|false/))
    data.completed = stringToBoolean(data.completed);
  if (typeof data?.deleted === "string" && data.deleted.match(/true|false/))
    data.deleted = stringToBoolean(data.deleted);
  if (typeof data?.id === "number") data.id = String(data.id);
  if (typeof data?.projectId === "number")
    data.projectId = String(data.projectId);
  return data;
};

export const normalizeTaskGetParams = (params) => {
  params = normalizeTaskFields(params);
  const { title, priority, completed } = params;
  if (!title) delete params.title;
  if (typeof completed !== "boolean") delete params.completed;
  if (!Object.values(priorities).includes(priority)) {
    delete params.priority;
  }
  return params;
};

const stringToBoolean = (string) => {
  return string === "true" ? true : false;
};
