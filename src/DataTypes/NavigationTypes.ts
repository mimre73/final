type ForgotVerifyParams = {
  type: number;
  value: string;
};
export type CreatePasswordParams = {
  verificationCode: string;
  phone: string;
};
export type VerifyPhoneParams = {
  phone: string;
};
declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Welcome: undefined;
      Auth: undefined;
      HomeNavigator: undefined;
      Signup: undefined;
      Verify: VerifyPhoneParams;
      Login: undefined;
      ForgotPassword: undefined;
      ForgotVerifyPhone: ForgotVerifyParams;
      Fingerprint: undefined;
      CreatePassword: undefined;
      SettingsNavigator: undefined;
      Notifications: undefined;
      Offers: undefined;
      Inbox: undefined;
      SearchResult: undefined;
      Calling: undefined;
      Chat: undefined;
      SelectVehicleType: undefined;
      // settings
      Bookings: undefined;
      Address: undefined;
      NotificationSettings: undefined;
      PaymentMethod: undefined;
      TransactionHistory: undefined;
      Security: undefined;
      Privacy: undefined;
      HelpCenter: undefined;
      InviteFriends: undefined;
      Languages: undefined;
      AddCard: undefined;
    }
  }
}
export type {ForgotVerifyParams};
