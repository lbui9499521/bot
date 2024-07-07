const axios = require('axios').default;
const colors = require('colors');

async function getTasks(accessToken) {
  try {
    const { data } = await axios({
      url: 'https://farm-api.bluwhale.com/api/v1/tasks/users',
      method: 'GET',
      headers: {
        Authorization: Cookie,
      },
    });

    return data.result
      .filter((content) => content.missionStatusId === 1)
      .map((item) => item.id);
  } catch (error) {
    if (error.response && error.response.data.message === 'Unauthorized') {
      console.log(
        colors.red('Your token has expired, please obtain a new token.')
      );
    } else {
      console.log(
        colors.red(
          'Error in Get Tasks: ' +
            (error.response ? error.response.data.message : error.message)
        )
      );
    }
  }
}

module.exports = getTasks;
