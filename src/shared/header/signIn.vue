<template>
    <div class="modal fade" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body p-0">
                    <div class="SignIn d-flex justify-content-around">
                        <div class="SignInRight col-6 p-4 d-flex flex-column align-items-around justify-content-between border-left">
                            <div style="text-align: right;">
                                <i class="fas fa-window-close"></i>
                                <h5 class="text-center mt-3 mb-5 text-success">ورود</h5>
                            </div>
                            <form>
                                <div class="form-group">
                                    <label for="email">شماره موبایل یا پست الکترونیک</label>
                                    <input type="email" class="form-control form-control-sm text-left" placeholder="aliebrahimi@gmail.com" id="email">
                                </div>
                                <div class="form-group">
                                    <label for="pwd">رمز عبور</label>
                                    <input type="password" class="form-control form-control-sm txt-error" placeholder="*****" id="pwd">
                                    <label for="pwd" style="color: red;">بازیابی رمز عبور | نام کاربری</label>
                                </div>
                            </form>
                            <div class="SignInBtn mt-3">
                                <a class="btn btn-success btn-block btn-sm text-light" >ورود</a>
                                <a class="btn btn-light btn-sm btn-block p-2" style="font-size: 10px;">رمز عبور یا نام کاربری خود رافراموش کره اید؟</a>
                            </div>
                        </div>
                        <div class="SignInLeft col-6 p-4 d-flex flex-column align-items-around justify-content-between">
                            <div class="SignInLogo d-flex flex-column align-items-center justify-content-center">
                                <img src="../../assets/Img/images/berand-2.gif" class="w-75 mb-3" alt="">
                                <p>اگر هنوز در تیکت اسپرت عضو نیستید از اینجا اقدام کنید</p>
                            </div>
                            <div class="SignInBtn ">
                                <a class="btn btn-sm btn-block text-light" style="background-color: #1b5059;">ثبت نام کنید</a>
                                <a class="btn btn-light btn-sm btn-block">ثبت نام و ورود با گوگل</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>