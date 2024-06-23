jest.mock("express", () => {
  const actualExpress = jest.requireActual("express");
  return {
    ...actualExpress,
    response: {
      ...actualExpress.response,
      json: jest.fn().mockImplementation(() => actualExpress.response),
      status: jest.fn().mockImplementation(() => actualExpress.response),
    },
  };
});
