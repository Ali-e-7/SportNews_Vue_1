<template>
    <div class="container-fluid special-back">
        <div class="container d-flex flex-wrap">
            <div class="col-12 head-special ">
                <h3>ویژه ها</h3>
                <p>بلیط های بازی های لیگ برتر</p>
            </div>
            <div class="col-12 col-md-6 col-lg-4 p-2" v-for="item in Special" :key="item">
                <div class="card shadow">
                    <img :src="item.picGame" style="width: 100%;" alt="pic-stadium">
                    <div class="card-body">
                        <div class="team-game border-bottom d-flex mt-1 ">
                            <div class="col-6 d-flex justify-content-center">
                                <img :src="item.teamHost" style="width: 80px; height: 100px;" alt="parcham">
                            </div>
                            <div class="col-6 d-flex justify-content-center">
                                <img :src="item.teamGuess" style="width: 80px; height: 100px;" alt="parcham">
                            </div>
                        </div>
                        <div class="time-game  border-bottom d-flex p-2">
                            <h6>{{ item.Stadium }}</h6>
                            <p class="mr-auto ml-3">{{ item.dataGame }}</p>
                            <p> {{ item.timeGame }}</p>
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
const spcialGame = [
    {
        picGame : "../../../src/assets/Img/images/cr7.jpg",
        teamGuess : "../../../src/assets/Img/images/estq.gif",
        teamHost : "../../../src/assets/Img/images/pers.gif",
        Stadium : "ورزشگاه آزادی تهران",
        dataGame : "27 دی ماه 97",
        timeGame : "15:30",
    },
    {
        picGame : "../../../src/assets/Img/images/cr7.jpg",
        teamGuess : "../../../src/assets/Img/images/estq.gif",
        teamHost : "../../../src/assets/Img/images/pers.gif",
        Stadium : "ورزشگاه آزادی تهران",
        dataGame : "27 دی ماه 97",
        timeGame : "15:30",
    },
    {
        picGame : "../../../src/assets/Img/images/cr7.jpg",
        teamGuess : "../../../src/assets/Img/images/estq.gif",
        teamHost : "../../../src/assets/Img/images/pers.gif",
        Stadium : "ورزشگاه آزادی تهران",
        dataGame : "27 دی ماه 97",
        timeGame : "15:30",
    },
]
export default {
    data(){
        return {
            Special : spcialGame
        }
    }
}
</script>