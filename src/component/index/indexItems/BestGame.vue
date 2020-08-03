<template>
    <div class="container mt-5 d-flex flex-wrap mb-5">
        <div class="col-12 border-top mt-5 mb-5">
            <h2 class="head-best mt-3">داغ ترین بازی ها</h2>
        </div>
        <div class="col-12 col-lg-6" v-for="item in 2" :key="item">
            <div class="card shadow">
                <img src="../../../assets/Img/images/Azadi5.jpg" style="width: 100%;" alt="pic-stadium">
                <div class="card-body">
                    <div class="time-game  border-bottom d-flex">
                        <p>ورشگاه آزادی تهران</p>
                        <p class="mr-auto ml-3">27 دی ماه 97</p>
                        <p>ساعت 15:30</p>

                    </div>
                    <div class="team-game border-bottom d-flex mt-2 pb-3">
                        <div class="col-6 d-flex justify-content-center">
                            <img src="../../../assets/Img/images/estq.gif" style="width: 80px; height: 100px;" alt="parcham">
                        </div>
                        <div class="col-6 d-flex justify-content-center">
                            <img src="../../../assets/Img/images/pers.gif" style="width: 80px; height: 100px;" alt="parcham">
                        </div>
                    </div>
                    <div class="chair d-flex border-bottom">
                        <div class="col-6 num-chair">
                            <h5 style="color: green;">535 صندلی</h5>
                            <p>از 800 صندلی ورزشگاه پر شده است</p>
                        </div>
                        <div class="col-6 time-chair">
                            <h5>8 روز </h5>
                            <p>زمان باقی مانده</p>
                        </div>
                    </div>
                    <div class="footer d-flex flex-wrap mt-2">
                        <div class="col-12 col-lg-5 m-0 social d-flex justify-content-center align-items-center">
                            <p class="mt-3">باز نشر کنید</p>
                            <i class="fab fa-twitter ml-1" style="font-size:20px"></i>
                            <i class="fab fa-instagram ml-1" style="font-size:20px"></i>
                            <i class="fab fa-facebook ml-1" style="font-size:20px"></i>
                            <i class="fab fa-telegram ml-1" style="font-size:20px"></i>
                        </div>
                        <div class="col-12 mt-2 mt-lg-0 col-lg-6">
                            <router-link to="/Reserve" class="btn btn-success m-0 d-flex justify-content-between align-items-center">
                                <p class="pt-1 ">خرید بلیط</p>
                                <i class="fa fa-angle-left mr-auto"></i>
                            </router-link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>