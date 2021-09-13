// constants for fields and string literals
const FIELDS = [
  {
    value: "theme",
    label: "Theme",
  },
  {
    value: "sub theme",
    label: "Sub-theme",
  },
  {
    value: "language",
    label: "Language",
  },
  {
    value: "reason",
    label: "Reason",
  },
  {
    value: "source",
    label: "Source",
  },
  {
    value: "rating",
    label: "Rating",
  },
  {
    value: "time period",
    label: "Time Period",
  },
];

const CONDITION = [
  {
    value: "Equals",
    label: "Equals",
  },
  {
    value: "Does not equal",
    label: "Does not equal",
  },
  {
    value: "Like",
    label: "Like",
  },
  {
    value: "Not like",
    label: "Not like",
  },
  {
    value: "Is Empty",
    label: "Is Empty",
  },
  {
    value: "Is",
    label: "Is",
  },
  {
    value: "Is Not",
    label: "Is Not",
  },
];

const CRITERIA = [
  {
    value: "Offers",
    label: "Offers",
  },
  {
    value: "Performance",
    label: "Performance",
  },
  {
    value: "Product Feedback",
    label: "Product Feedback",
  },
  {
    value: "Platform",
    label: "Platform",
  },
];

const OPERATOR = {
  "Equals": "==",
  "Does not equal": "!=",
  "Like": "Like",
  "Not like": "Not like",
  "Is Empty": "Is Empty",
  "Is": "Is",
  "Is Not": "Is Not",
};

const QUERY_OPERATOR = {
  AND: " && ",
  OR: " || ",
};

export { FIELDS, CONDITION, CRITERIA, OPERATOR, QUERY_OPERATOR };
