<template>
     <div class="container">
        <div class="row mb-3 mt-5">

            <!--------------- Right-Panel --------------->
            <div class="col-r col-12 col-md-8">
                <div class="BookMarkGame p-2">
                    <section class="BookMarcIcon d-flex justify-content-start ">
                        <i class='fas fa-bookmark' style='font-size:20px;color:white'></i>
                    </section>
                    <section class="BookMarkTeam d-flex justify-content-around p-5 mb-5">
                        <img src="../../../assets/Img/images/esteq.png" alt="esteqlal-pic">
                        <img src="../../../assets/Img/images/pers.png" alt="perspolic-pic">
                    </section>
                    <section class="pages d-flex justify-content-center">
                        <div class="cricle"></div>
                        <div class="cricle bg-success"></div>
                        <div class="cricle"></div>
                    </section>
                </div>
            </div>

            <!--------------- Left-Panel --------------->

            <div class="col-l col-12 col-md-4 mr-0">
                <div class="BookMarkPanel">
                    <div class="card border-0">
                        <h5 class="card-text">ورزشگاه آزادی</h5>
                        <p class="card-text">پرسپولیس / استقلال</p>
                        <p class="card-text">شهرآورد دی ماه 97 </p>
                        <span>
                            <p class="card-text">تاریخ : 27 دی </p>
                            <p class="card-text">ساعت : 15 : 30 </p>
                        </span>
                        <div class="star mt-4 d-flex justify-content-center align-items-center">
                            <section class="col-6 star-icon pt-2">
                                <span>
                                    <a href="#" data-toggle="modal" data-target="#myModal"><i class='fas fa-star'
                                            style="font-size: 20px;color: #6a6a6a;"></i></a>
                                    <a href="#" data-toggle="modal" data-target="#myModal"><i class='fas fa-star'
                                            style="font-size: 20px;color: #6a6a6a;"></i></a>
                                    <a href="#" data-toggle="modal" data-target="#myModal"><i class='fas fa-star'
                                            style="font-size: 20px;color: #c7c7c7;"></i></a>
                                    <a href="#" data-toggle="modal" data-target="#myModal"><i class='fas fa-star'
                                            style="font-size: 20px;color: #c7c7c7;"></i></a>
                                    <a href="#" data-toggle="modal" data-target="#myModal"><i class='fas fa-star'
                                            style="font-size: 20px;color: #c7c7c7;"></i></a>
                                </span>
                                <span>
                                    <p>شما به همراه 32 نفر رای داده اید</p>
                                </span>
                            </section>
                            <section class="col-6 star-num">
                                <span>
                                    <h4 class="mb-0">25</h4>
                                    <p>نظر برای این مسابقه</p>
                                </span>
                            </section>
                        </div>

                        <a class="btn btn-success d-block d-flex justify-content-between mb-3">
                            <router-link to='/selectATM'>پرداخت</router-link>
                            <i class='fas fa-angle-down'></i>
                        </a>
                        <div class="social d-flex justify-content-between align-items-center p-1">
                            <span>باز نشر کنید</span>
                            <span>
                                <a href="#"><i class="fab fa-twitter ml-2 " style="font-size:20px;color: gray;"></i></a>
                                <a href="#"><i class="fab fa-instagram ml-2"
                                        style="font-size:20px;color: gray;"></i></a>
                                <a href="#"><i class="fab fa-facebook ml-2 "
                                        style="font-size:20px;color: gray;"></i></a>
                                <a href="#"><i class="fab fa-telegram ml-2" style="font-size:20px;color: gray;"></i></a>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
            <div class="modal" id="myModal">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content p-5">

                        <div class="MsgLogIn col-12 d-flex justify-content-between p-2 ">
                            <span class="d-flex">
                                <i class='far fa-comment-alt ml-2'></i>
                                <p>فقط اعضای سایت می توانند نظر دهند</p>
                            </span>
                            <p class="mr-auto">ثبت نام / ورود</p>
                        </div>
                        <div class="mt-4">
                            <a href="#" data-toggle="modal" data-target="#myModal"><i class='fas fa-star'
                                    style="font-size: 20px;color: #6a6a6a;"></i></a>
                            <a href="#" data-toggle="modal" data-target="#myModal"><i class='fas fa-star'
                                    style="font-size: 20px;color: #6a6a6a;"></i></a>
                            <a href="#" data-toggle="modal" data-target="#myModal"><i class='fas fa-star'
                                    style="font-size: 20px;color: #c7c7c7;"></i></a>
                            <a href="#" data-toggle="modal" data-target="#myModal"><i class='fas fa-star'
                                    style="font-size: 20px;color: #c7c7c7;"></i></a>
                            <a href="#" data-toggle="modal" data-target="#myModal"><i class='fas fa-star'
                                    style="font-size: 20px;color: #c7c7c7;"></i></a>
                        </div>


                        <div class="cm d-flex flex-wrap  border rounded p-3 mt-4">
                            <img src="../../../assets/Img/images/davidbeckham2018.jpg" class=" rounded-circle ml-3"
                                style="width:55px;">
                            <h5 class="ml-3" style="font-family: Yekan;">علی ابراهیمی</h5>
                            <p style="color: #6a6a6a;font-family: Yekan;">نظرت برامون مهمه.امتیاز و نظرات شما کیفیت این
                                بازی را مشخص میکند.</p>
                            <div class="msg-box col-12 p-2 ">
                                <p>متاسفانه زلزله شمار کثیری از هموطنان مان را در غرب کشور سوگوار و بیخانمان کرده است.
                                    بعد از همبستگی بی نظیر هموطنانمون و تهیه وسایل مورد نیاز و شرایط اسکان موقت بر آن
                                    شدیم
                                    فاز 2 و 3 حمایت از زلزله زدگان را اغدام کنیم و برای ساخت و محکم سازی خانه هایشان
                                    آستین بالا بزنیم.
                                </p>
                                <p>می خواهیم با همیاری شما همیشه همراهان عزیز،خانه های حداقل یک روستا را با سازه های
                                    زلزله زده محکم سازی کرده و دلهایشان را قرص که دیگر زمین لرزه ها خاه هایشان را
                                    نلرزاند.
                                </p>
                            </div>
                            <div class="btn btn-info mr-auto mt-3">ارسال دیدگاه</div>
                        </div>


                        <div class="cm d-flex flex-wrap border rounded p-3 mt-4">

                            <img src="../../../assets/Img/images/davidbeckham2018.jpg" class=" rounded-circle ml-3"
                                style="width:55px;">
                            <h5 class="ml-3" style="font-family: Yekan;">محمد افضلی</h5>
                            <p style="color: #6a6a6a;font-family: Yekan;">| 22 اردیبهشت 96</p>
                            <div class="msg-box-r col-12 p-2 ">
                                <p> خیلی وقته دیگه وقتی به پروژه کمک می کنم ، احساس رضایت نمی کنم! فقط حالماز این همه
                                    فقری که دورو برم هست
                                    به هم میخوره.و از تع دل آرزو میکنم دیگه هیچ نیازی به هیچ خیریه ای در هیچ کجای دنیا
                                    وجود نداشته باشه.
                                </p>
                            </div>

                            <div class="OptionReply col-12 d-flex">
                                <p class="btn OptionBox ml-2 ">
                                    <i class='fas fa-share-square'></i>
                                    پاسخ
                                <p>
                                <p class="btn OptionBox ml-2">
                                    <i class='fas fa-thumbs-down'></i>
                                    5
                                </p>
                                <p class="btn OptionBox">
                                    <i class='fas fa-thumbs-up'></i>
                                    13
                                </p>
                                <p class="btn OptionBox mr-auto">
                                    <i class='fas fa-exclamation-triangle '></i>
                                    گزارش
                                </p>
                            </div>
                        </div>

                        <div class="cm d-flex flex-wrap border rounded p-3 mt-4">

                            <img src="../../../assets/Img/images/davidbeckham2018.jpg" class=" rounded-circle ml-3"
                                style="width:55px;">
                            <h5 class="ml-3" style="font-family: Yekan;">علی ابراهیمی</h5>
                            <p style="color: #6a6a6a;font-family: Yekan;">| 22 اردیبهشت 96</p>
                            <div class="AnswerCm col-12 d-flex justify-content-start mb-0 mt-2">
                                <p>
                                    <i class='fas fa-share-square ml-1 mt-1'></i>
                                    در پاسخ به حمید رضا انصاری
                                </p>
                            </div>

                            <div class="msg-box-r col-12 p-2 mt-0">
                                <p class="mb-0">محمد افضلی عزیز ،</p>
                                <p> ما هم مثل شما امیدواریم جهانی پر برکت و سر شار از صلح داشته باشیم، اما این اتفاق نمی
                                    افته مگر با همدلی و
                                    اتحاد بین همه ی ما انسان ها.به امید اینکه بتونیم یه روز باهم بسازیم.
                                </p>
                            </div>

                            <div class="OptionReply col-12 d-flex">
                                <p class="btn OptionBox ml-2 ">
                                    <i class='fas fa-share-square'></i>
                                    پاسخ
                                <p>
                                <p class="btn OptionBox ml-2">
                                    <i class='fas fa-thumbs-down '></i>
                                    5
                                </p>
                                <p class="btn OptionBox">
                                    <i class='fas fa-thumbs-up'></i>
                                    13
                                </p>
                                <p class="btn OptionBox mr-auto">
                                    <i class='fas fa-exclamation-triangle '></i>
                                    گزارش
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    </div>
</template>