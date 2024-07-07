const axios = require('axios').default;
const colors = require('colors');

async function clearTask(accessToken, taskId) {
  try {
    const { data } = await axios({
      url: `https://farm-api.bluwhale.com/api/v1/tasks=${taskId}`,
      method: 'POST',
      data: {},
      headers: {
        Authorization: accessToken,
      },
    });

    console.log(
      colors.green(`Your mission has been cleared! Status: ${data.result}`)
    );
  } catch (error) {
    console.log(
      colors.red(
        'Error in Clear Task: ' +
          (error.response ? error.response.data.message : error.message)
      )
    );
  }
}

module.exports = clearTask;
