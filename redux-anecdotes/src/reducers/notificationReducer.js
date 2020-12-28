const notifications = ["was created successfully!", "You voted for:", null];

const notificationReducer = (state = notifications, action) => {
  switch (action.type) {
    case "NOTIFY_CREATE": {
      return action.data.content + "  " + notifications[0];
    }
    case "NOTIFY_VOTE": {
      return notifications[1] + " " + action.data.content;
    }
    case "NOTIFY_REMOVE": {
      return notifications[2];
    }

    default:
      return null;
  }
};

export const notifyCreate = (content) => {
  return {
    type: "NOTIFY_CREATE",
    data: {
      content,
      notification: notifications[0],
    },
  };
};

export const notifyRemove = (content) => {
  return {
    type: "NOTIFY_REMOVE",
    data: {
      content,
      notification: notifications[2],
    },
  };
};

export const notifyVote = (content) => {
  return {
    type: "NOTIFY_VOTE",
    data: {
      content,
      notification: notifications[1],
    },
  };
};

export default notificationReducer;
