<template>
    <div class="col-12 col-md-5 col-lg-4 mt-md-5">
        <div class="BookMarkPanel">
            <div class="card ">
                <div class=" d-flex justify-content-between p-2 p-lg-4 mx-2 border-bottom">
                    <img src="../../../assets/Img/images/pers.gif">
                    <img src="../../../assets/Img/images/estq.gif">
                </div>
                <span class="d-flex justify-content-between p-3" style="font-family: Yekan;">
                    <h5>ورزشگاه آزادی</h5>
                    <p>27 دی</p>
                    <p>15 : 30</p>
                </span>
                <div class="Confirm p-3">
                    <p>تیم هوادار : استقلال</p>
                    <p class="border-top pt-4">ناحیه ورزشگاه : ناحیه B</p>
                    <p class="border-top pt-3 m-0">تعداد و جایگاه ها : 6</p>
                    <p class="p-0 m-0">B10 - B11 - B12 - B13 - B14 - B15</p>
                </div>
                <span class="sum p-3 border-bottom">
                    <h5 style="color: darkgreen;">محاسبه قیمت</h5>
                    <span class="d-flex justify-content-between">
                        <p>بر اساس جایگاه هر ناحیه B</p>
                        <p>(هرنفر 10.000 ت)</p>
                    </span>
                </span>
                <span class="sum d-flex justify-content-between p-3">
                    <h5 style="color: darkgreen;">مجموع هزینه :</h5>
                    <h5 style="color: darkgreen;">60.000 تومان</h5>
                </span>
                <router-link to='/'>
                    <a class="btn btn-success d-block m-2">پرداخت</a>
                </router-link>
            </div>
        </div>
    </div>
</template>