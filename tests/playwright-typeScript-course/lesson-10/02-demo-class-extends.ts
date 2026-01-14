class LoginPage {
  usernameLoc: string;
  passwordLoc: string;
  rememberMeLoc: string;
  btnLoginLoc: string;

  constructor(
    usernameLoc: string,
    passwordLoc: string,
    rememberMeLoc: string,
    btnLoginLoc: string
  ) {
    this.usernameLoc = usernameLoc;
    this.passwordLoc = passwordLoc;
    this.rememberMeLoc = rememberMeLoc;
    this.btnLoginLoc = btnLoginLoc;
  }

  fillUserName(username: string): void {
    console.log(`Filling username`, username);
  }

  fillPassword(password: string): void {
    console.log(`Filling password`, password);
  }

  clickRememberMe(): void {
    console.log(`Clicking remember me`);
  }

  clickLoginButton(): void {
    console.log(`Login successful`);
  }
}

class DashboardPage extends LoginPage {
  headingLoc: string;

  constructor(
    usernameLoc: string,
    passwordLoc: string,
    rememberMeLoc: string,
    btnLoginLoc: string,
    headingLoc: string
  ) {
    super(usernameLoc,passwordLoc,rememberMeLoc,btnLoginLoc)
    this.headingLoc = headingLoc;
  }

// super(...) dùng để gọi constructor của class cha
// Muốn truy cập biến (field) của class cha thì dùng this.<tên biến>
// Muốn gọi method của class cha thì dùng super.<tên method>
}

const dashboardPage = new DashboardPage("an","chu","chu","chu","chu");
dashboardPage.fillUserName("anhcn")

