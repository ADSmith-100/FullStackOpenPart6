const notifications = ["This is your notification, asshole!"];

const notificationReducer = (state = notifications, action) => {
  switch (action.type) {
    case "NOTIFICATION":
      return notifications;
    default:
      return state;
  }
};

export default notificationReducer;
