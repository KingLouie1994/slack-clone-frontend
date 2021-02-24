// Imports of icons
import MessageIcon from "@material-ui/icons/Message";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleIcon from "@material-ui/icons/People";
import AppsIcon from "@material-ui/icons/Apps";

export const sidebarItems = [
  {
    icon: <MessageIcon />,
    text: "Thread",
  },
  {
    icon: <InboxIcon />,
    text: "All DMs",
  },
  {
    icon: <DraftsIcon />,
    text: "Mentions & Reactions",
  },
  {
    icon: <BookmarkBorderIcon />,
    text: "Save Items",
  },
  {
    icon: <PeopleIcon />,
    text: "Peoples & Groups",
  },
  {
    icon: <AppsIcon />,
    text: "More",
  },
];

export const channels = [
  {
    name: "Welcome",
    desciption: "Welcome messages for new members of our slack channel",
  },
  {
    name: "Announcements",
    desciption:
      "Official company-wide announcements about everything important",
  },
  {
    name: "General",
    desciption:
      "Just talk about everything that matters to you and you are interested in",
  },
  {
    name: "Q&As",
    desciption:
      "Ask questions and help people with everythin regarging to work",
  },
];
