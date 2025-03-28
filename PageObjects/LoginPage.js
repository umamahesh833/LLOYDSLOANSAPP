class LoginPage{

    constructor(page){
        this.page = page;
        this.UserName = page.getByPlaceholder('Username');
        this.Password = page.locator("input[name='password']");
        this.Submit = page.locator("//button[@type='submit']");
    }


async Goto(){
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

}

async ValidLogin(){
    await this.UserName.type("Admin")
    await this.Password.fill("admin123")
    await this.Submit.click()
}

















}

module.exports = {LoginPage}