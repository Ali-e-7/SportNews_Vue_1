<template>
    <div class="container-fluid special-back">
        <div class="container d-flex flex-wrap">
            <div class="col-12 head-special ">
                <h3>ویژه ها</h3>
                <p>بلیط های بازی های لیگ برتر</p>
            </div>
            <div class="col-12 col-md-6 col-lg-4 p-2" v-for="item in 3" :key="item">
                <div class="card shadow">
                    <img src="../../../assets/Img/images/cr7.jpg" style="width: 100%;" alt="pic-stadium">
                    <div class="card-body">
                        <div class="team-game border-bottom d-flex mt-1 ">
                            <div class="col-6 d-flex justify-content-center">
                                <img src="../../../assets/Img/images/estq.gif" style="width: 80px; height: 100px;" alt="parcham">
                            </div>
                            <div class="col-6 d-flex justify-content-center">
                                <img src="../../../assets/Img/images/pers.gif" style="width: 80px; height: 100px;" alt="parcham">
                            </div>
                        </div>
                        <div class="time-game  border-bottom d-flex p-2">
                            <p>ورشگاه آزادی تهران</p>
                            <p class="mr-auto ml-3">27 دی ماه 97</p>
                            <p>ساعت 15:30</p>
                        </div>
                        <div class="footer d-flex flex-wrap mt-2">
                            <div class="col-12 ">
                                <router-link to="/Reserve" class="btn btn-success btn-block ">
                                    <p class="pt-1 ">خرید بلیط</p>
                                </router-link>
                            </div>
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