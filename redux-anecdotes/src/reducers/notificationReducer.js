// const notifications = ["was created successfully!", "You voted for:", null];

const notificationReducer = (state = "", action) => {
  switch (action.type) {
    // case "NOTIFY_CREATE": {
    //   return action.data.content + "  " + notifications[0];
    // }
    // case "NOTIFY_VOTE": {
    //   return notifications[1] + " " + action.data.content;

    case "NOTIFY_REMOVE": {
      return action.data.notification;
    }
    case "SET_NOTIFY": {
      return action.data.notification;
    }

    default:
      return state;
  }
};

// export const notifyCreate = (content) => {
//   return {
//     type: "NOTIFY_CREATE",
//     data: {
//       content,
//       notification: notifications[0],
//     },
//   };
// };

export const notifyRemove = (content) => {
  return {
    type: "NOTIFY_REMOVE",
    data: {
      content,
      notification: null,
    },
  };
};

// export const notifyVote = (content) => {
//   return {
//     type: "NOTIFY_VOTE",
//     data: {
//       content,
//       notification: notifications[1],
//     },
//   };
// };

export const setNotification = (content, time) => {
  return async (dispatch) => {
    console.log(content, time);

    dispatch({
      type: "SET_NOTIFY",
      data: {
        content,
        notification: content,
      },
    });
    //notification !null?
    await setTimeout(() => {
      dispatch(notifyRemove());
    }, time * 500);
    //otherwise
  };
};

export default notificationReducer;
