var url = window.location.pathname;
var randomName = url.substring(url.lastIndexOf("/") + 1);

const main = async () => {
  VoxeetSDK.initialize(
    "KywNDseO_-Zh7-o4ZWMo6A==",
    "B7SwJPl_CfyrUtUF9oMkQewHbEsqp6nggr_ggdtdmQg="
  );

  try {
    await VoxeetSDK.session.open({ name: randomName });
    initUI();
  } catch (e) {
    alert("Something went wrong : " + e);
  }
};

main();
