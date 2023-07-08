import {nonTokenAxios} from './apiConfig';

type signupParams = {
  username: string;
  password: string;
  verificationCode: string;
};
// 4. Log in by POST-ing the email and password and get tokens in return
// and call setAuthTokens with the result.
export const sendVerificationCode = async (phoneNo: string) => {
  try {
    const response: any = await nonTokenAxios.post('/verification/send-code', {
      phoneNo,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};
export const checkVerifyCode = async (
  phoneNo: string,
  verificationCode: string,
) => {
  try {
    const response: any = await nonTokenAxios.post('/verification/verify', {
      phoneNo,
      verificationCode,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};
export const signup = async (params: signupParams) => {
  try {
    const response: any = await nonTokenAxios.post('/signup', params);
    return response.data;
  } catch (err) {
    throw err;
  }
};
// const login = async (params: ILoginRequest) => {
//   const response = await axiosInstance.post('/auth/login', params);

//   // save tokens to storage
//   await setAuthTokens({
//     accessToken: response.data.access_token,
//     refreshToken: response.data.refresh_token,
//   });
// };

// 5. Log out by clearing the auth tokens from AsyncStorage
// const logout = () => clearAuthTokens();

// Check if refresh token exists
// if (isLoggedIn()) {
// assume we are logged in because we have a refresh token
// }

// Get access to tokens
// const accessToken = getAccessToken().then(accessToken =>
//   console.log(accessToken),
// );
// const refreshToken = getRefreshToken().then(refreshToken =>
//   console.log(refreshToken),
// );
