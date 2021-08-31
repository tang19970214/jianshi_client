<template>
  <div id="orderInfo" class="pt-4 pb-120 d-block d-mb-none">
    <!-- 白牌 -->
    <div class="w-100" v-if="this.getCar == 'whiteCar'">
      <div class="w-100" v-if="whiteCarData.length > 0">
        <div class="orderInfoList w-100 mb-10 d-flex flex-column" v-for="item in whiteCarData" :key="item.id">
          <div class="orderInfoList__top p-16">
            <el-row>
              <el-col :span="6" class="d-flex flex-column">
                <label class="mb-5">乘客姓名</label>
                <strong class="m-0">{{ item.name }}</strong>
              </el-col>
              <el-col :span="11" class="d-flex flex-column">
                <label class="mb-5">預約時間</label>
                <strong class="m-0">{{ item.toTime }}</strong>
              </el-col>
              <el-col :span="7" class="d-flex flex-column">
                <label class="mb-5">鄉鎮村里</label>
                <strong class="m-0">尖石鄉{{ item.village }}</strong>
              </el-col>
            </el-row>
            <el-row class="pt-16">
              <el-col :span="4" class="d-flex flex-column">
                <label class="mb-5">身分</label>
                <strong class="m-0">{{ item.userType }}</strong>
              </el-col>
              <el-col :span="6" class="d-flex flex-column">
                <label class="mb-5">轉乘原因</label>
                <strong class="m-0">{{ item.transferPurpose }}</strong>
              </el-col>
              <el-col :span="7" class="d-flex flex-column">
                <label class="mb-5">轉乘運具</label>
                <strong class="m-0">{{ item.transferTraffic }}</strong>
              </el-col>
              <el-col :span="7" class="d-flex flex-column">
                <label class="mb-5">轉乘業者</label>
                <strong class="m-0">{{ item.transferOperator }}</strong>
              </el-col>
            </el-row>
          </div>

          <div class="orderInfoList__local p-16">
            <div class="w-100 mb-8 d-flex flex-column">
              <div class="w-100 d-flex align-items-center flex-row">
                <img class="pl-2 pr-4" src="@/assets/images/icon/circle.png" alt="起點" width="10px" />
                <p class="m-0 font-s-12 text-mainColor">起點</p>
              </div>
              <div class="w-100 ml-16">{{ item.fromAddr }}</div>
            </div>

            <div class="w-100 d-flex flex-column">
              <div class="w-100 d-flex align-items-center flex-row">
                <img src="@/assets/images/icon/map.png" alt="迄點" width="16px" />
                <p class="m-0 font-s-12 text-mainColor">迄點</p>
              </div>
              <div class="w-100 ml-16">{{ item.toAddr }}</div>
            </div>

            <div class="orderInfoList__local--editIcon" @click="handleUpdate(item)">
              <i class="el-icon-edit"></i>
            </div>
          </div>

          <!-- 取消訂單btn -->
          <!-- <div class="orderInfoList__delete w-100 py-8 d-flex align-items-center justify-content-center">
            <i class="el-icon-delete"></i>
            <p class="m-0">取消訂單</p>
          </div> -->
        </div>
      </div>
      <div class="w-100 mt-50 pb-150" v-else>
        <div class="w-100 d-flex align-items-center justify-content-center flex-column">
          <img src="@/assets/images/noData.png" alt="查無資料" />
          <p class="m-0">查無資料</p>
        </div>
      </div>
    </div>

    <!-- 巴士 -->
    <!-- <div class="w-100" v-if="this.getCar == 'bus'">
      <div class="w-100" v-if="busData.length > 0">
        <div
          class="orderInfoList w-100 mb-10 d-flex flex-column"
          v-for="(item, index) in filterBusStatus(busData)"
          :key="'OL_' + index"
        >
          <div class="orderInfoList__top p-16">
            <el-row class="d-flex align-items-center">
              <el-col :span="7" class="d-flex flex-column">
                <label class="mb-5">訂車日期</label>
                <p class="m-0">{{ item.date }}</p>
              </el-col>
              <el-col :span="5" class="d-flex flex-column">
                <label class="mb-5">時間</label>
                <p class="m-0">{{ item.timer }}</p>
              </el-col>
              <el-col :span="8" class="d-flex flex-column">
                <label class="mb-5">訂車人電話</label>
                <p class="m-0">{{ item.phone }}</p>
              </el-col>
              <el-col :span="4" class="d-flex align-items-center">
                <span
                  class="px-8 py-3 font-s-12"
                  :style="getOrderStatus(item.status)"
                >
                  {{ item.status }}
                </span>
              </el-col>
            </el-row>
          </div>
          <div class="orderInfoList__road">
            <div class="px-16 py-8">
              <label>路線</label>
              <strong class="ml-8">{{ item.road }}</strong>
            </div>
          </div>
          <div class="orderInfoList__local p-16">
            <div class="w-100 mb-8 d-flex flex-column">
              <div class="w-100 d-flex align-items-center flex-row">
                <img
                  class="px-4"
                  src="@/assets/images/icon/circle.png"
                  alt="起點"
                  width="8px"
                />
                <p class="m-0 font-s-12 text-mainColor">起點站牌</p>
              </div>
              <div class="w-100 ml-16">{{ item.localStart }}</div>
            </div>
            <div class="w-100 d-flex flex-column">
              <div class="w-100 d-flex align-items-center flex-row">
                <img
                  src="@/assets/images/icon/map.png"
                  alt="迄點"
                  width="16px"
                />
                <p class="m-0 font-s-12 text-mainColor">迄點站牌</p>
              </div>
              <div class="w-100 ml-16">{{ item.localEnd }}</div>
            </div>
          </div>
          <div
            class="orderInfoList__delete w-100 py-8 d-flex align-items-center justify-content-center"
          >
            <i class="el-icon-delete"></i>
            <p class="m-0">取消訂單</p>
          </div>
        </div>
      </div>
      <div class="w-100 mt-50 pb-150" v-else>
        <div
          class="w-100 d-flex align-items-center justify-content-center flex-column"
        >
          <img src="@/assets/images/noData.png" alt="查無資料" />
          <p class="m-0">查無資料</p>
        </div>
      </div>
    </div> -->

    <!-- dialog -->
    <el-dialog title="編輯訂單" :visible.sync="dialogEditVisible" width="90%">
      <el-form :rules="rules" ref="dataForm" :model="temp" label-position="top" label-width="100px">
        <el-row>
          <!-- 預約人員 -->
          <el-col :span="24">
            <el-form-item size="small" :label="'預約人員'" prop="reserveName">
              <el-input v-model="temp.reserveName" placeholder="請輸入預約人員"></el-input>
            </el-form-item>
          </el-col>
          <!-- 預約人員電話 -->
          <el-col :span="24">
            <el-form-item size="small" :label="'預約人員電話'" prop="contactPhone">
              <el-input v-model="temp.contactPhone" placeholder="請輸入預約人員電話"></el-input>
            </el-form-item>
          </el-col>
          <!-- 鄉鎮 -->
          <el-col :span="12">
            <el-form-item size="small" :label="'鄉鎮'">
              <el-select v-model="temp.town" placeholder="請選擇鄉鎮" style="width: 100%">
                <el-option label="尖石鄉" value="SSTW"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 村里 -->
          <el-col :span="12">
            <el-form-item size="small" :label="'村里'" prop="village">
              <el-input v-model="temp.village" placeholder="請輸入村里"></el-input>
            </el-form-item>
          </el-col>
          <!-- 身分 -->
          <el-col :span="12">
            <el-form-item size="small" :label="'身分'" prop="userType">
              <el-select v-model="temp.userType" placeholder="請選擇身分" style="width: 100%">
                <el-option label="一般" value="一般"></el-option>
                <el-option label="學生" value="學生"></el-option>
                <el-option label="年長者" value="年長者"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 乘客姓名 -->
          <el-col :span="12">
            <el-form-item size="small" :label="'乘客姓名'" prop="name">
              <el-input v-model="temp.name" placeholder="請輸入乘客姓名"></el-input>
            </el-form-item>
          </el-col>
          <!-- 生日 -->
          <el-col :span="12">
            <el-form-item size="small" :label="'生日'" prop="birthday">
              <el-date-picker v-model="temp.birthday" type="date" placeholder="請選擇日期" value-format="yyyy-MM-dd" :clearable="false" :picker-options="disAfterDate"></el-date-picker>
            </el-form-item>
          </el-col>
          <!-- 共乘人數 -->
          <el-col :span="12">
            <el-form-item size="small" :label="'共乘人數'" prop="carpoolNum">
              <el-input-number style="width: 100%" v-model="temp.carpoolNum" :min="0" :max="10"></el-input-number>
            </el-form-item>
          </el-col>
          <!-- 預約日期 -->
          <el-col :span="24">
            <el-form-item size="small" :label="'預約日期'" prop="reserveDate">
              <el-date-picker v-model="temp.reserveDate" type="date" placeholder="請選擇日期" value-format="yyyy-MM-dd" :picker-options="disBeforeTime" :clearable="false"></el-date-picker>
            </el-form-item>
          </el-col>
          <!-- 上車時間 -->
          <el-col :span="24">
            <el-form-item size="small" :label="'上車時間'" prop="fromTime">
              <el-time-select v-model="temp.fromTime" :picker-options="{start: timeStartTime, step: '00:10', end: '20:00'}" placeholder="請選擇時間" :clearable="false" :disabled="!temp.reserveDate">
              </el-time-select>
            </el-form-item>
          </el-col>
          <!-- 上車地點 -->
          <el-col :span="24">
            <el-form-item size="small" :label="'上車地點'" prop="fromAddr">
              <el-input v-model="temp.fromAddr" placeholder="請輸入上車地點"></el-input>
            </el-form-item>
          </el-col>
          <!-- 上車地點經度 -->
          <el-col :span="12">
            <el-form-item size="small" :label="'上車地點經度'" prop="fromLng">
              <el-input v-model="temp.fromLng" placeholder="請輸入上車地點經度"></el-input>
            </el-form-item>
          </el-col>
          <!-- 上車地點緯度 -->
          <el-col :span="12">
            <el-form-item size="small" :label="'上車地點緯度'" prop="fromLat">
              <el-input v-model="temp.fromLat" placeholder="請輸入上車地點緯度"></el-input>
            </el-form-item>
          </el-col>
          <!-- 下車時間 -->
          <el-col :span="24">
            <el-form-item size="small" :label="'下車時間'" prop="toTime">
              <el-time-select v-model="temp.toTime" :picker-options="{start: timeStartTime, step: '00:10', end: '20:00'}" placeholder="請選擇時間" :clearable="false" :disabled="!temp.reserveDate">
              </el-time-select>
            </el-form-item>
          </el-col>
          <!-- 下車地點 -->
          <el-col :span="24">
            <el-form-item size="small" :label="'下車地點'" prop="toAddr">
              <el-input v-model="temp.toAddr" placeholder="請輸入下車地點"></el-input>
            </el-form-item>
          </el-col>
          <!-- 下車地點經度 -->
          <el-col :span="12">
            <el-form-item size="small" :label="'下車地點經度'" prop="toLng">
              <el-input v-model="temp.toLng" placeholder="請輸入下車地點經度"></el-input>
            </el-form-item>
          </el-col>
          <!-- 下車地點緯度 -->
          <el-col :span="12">
            <el-form-item size="small" :label="'下車地點緯度'" prop="toLat">
              <el-input v-model="temp.toLat" placeholder="請輸入下車地點緯度"></el-input>
            </el-form-item>
          </el-col>
          <!-- 是否轉乘 -->
          <el-col :span="24">
            <el-form-item size="small" :label="'是否轉乘'" prop="hasTransfer">
              <el-select v-model="temp.hasTransfer" placeholder="請選擇是否轉乘" style="width: 100%">
                <el-option label="是" value="是"></el-option>
                <el-option label="否" value="否"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 轉乘運具1 -->
          <el-col :span="12" v-if="temp.hasTransfer == '是'">
            <el-form-item size="small" :label="'轉乘運具1'" prop="transferTraffic">
              <el-select v-model="temp.transferTraffic" placeholder="請選擇轉乘運具" style="width: 100%" @change="temp.transferOperator = ''">
                <el-option label="幸福巴士" value="幸福巴士"></el-option>
                <el-option label="噗噗共乘" value="噗噗共乘"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 轉乘業者1 -->
          <el-col :span="12" v-if="temp.hasTransfer == '是'">
            <el-form-item size="small" :label="'轉乘業者1'" prop="transferOperator" :rules="temp.transferTraffic == '幸福巴士' ? rules.transferOperator : [{required: false}]">
              <el-select v-model="temp.transferOperator" placeholder="請選擇轉乘業者" style="width: 100%">
                <el-option label="尖石鄉DRTS" value="尖石鄉DRTS"></el-option>
                <el-option label="尖石鄉基本民行" value="尖石鄉基本民行"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 轉乘運具2 -->
          <el-col :span="12" v-if="temp.hasTransfer == '是'">
            <el-form-item size="small" :label="'轉乘運具2'" prop="transferTraffic2">
              <el-select v-model="temp.transferTraffic2" placeholder="請選擇轉乘運具" style="width: 100%" @change="temp.transferOperator2 = ''">
                <el-option label="幸福巴士" value="幸福巴士"></el-option>
                <el-option label="噗噗共乘" value="噗噗共乘"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 轉乘業者2 -->
          <el-col :span="12" v-if="temp.hasTransfer == '是'">
            <el-form-item size="small" :label="'轉乘業者2'" prop="transferOperator2" :rules="temp.transferTraffic2 == '幸福巴士' ? rules.transferOperator2 : [{required: false}]">
              <el-select v-model="temp.transferOperator2" placeholder="請選擇轉乘業者" style="width: 100%">
                <el-option label="尖石鄉DRTS" value="尖石鄉DRTS"></el-option>
                <el-option label="尖石鄉基本民行" value="尖石鄉基本民行"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 轉乘目的 -->
          <el-col :span="24">
            <el-form-item size="small" :label="'轉乘目的'" prop="transferPurpose">
              <el-select v-model="temp.transferPurpose" placeholder="請選擇轉乘目的" style="width: 100%">
                <el-option label="就醫" value="就醫"></el-option>
                <el-option label="就學" value="就學"></el-option>
                <el-option label="就養" value="就養"></el-option>
                <el-option label="日常" value="日常"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button size="small" type="danger" @click="dialogEditVisible = false" plain>關閉</el-button>
        <el-button size="small" type="primary" @click="updateData()">確認</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import moment from "moment";
import api from "@/api/apis.js";

export default {
  data() {
    return {
      getStartDate: "",
      getEndDate: "",
      whiteCarData: [],
      // busData: [
      //   {
      //     date: "2016-05-03",
      //     timer: "09:00",
      //     road: "DRTS 平日線",
      //     people: "20人",
      //     localStart: "尖石鄉公所",
      //     localEnd: "薰衣草森林腳下",
      //     phone: "0987654321",
      //     status: "新訂單",
      //     statusCode: "new",
      //   },
      //   {
      //     date: "2016-05-02",
      //     timer: "13:00",
      //     road: "DRTS 平日線",
      //     people: "13人",
      //     localStart: "尖石鄉公所",
      //     localEnd: "薰衣草森林腳下",
      //     phone: "0987654321",
      //     status: "已排班",
      //     statusCode: "plan",
      //   },
      //   {
      //     date: "2016-05-04",
      //     timer: "13:00",
      //     road: "DRTS 平日線",
      //     people: "5人",
      //     localStart: "尖石鄉公所",
      //     localEnd: "薰衣草森林腳下",
      //     phone: "0987654321",
      //     status: "已抵達",
      //     statusCode: "arrive",
      //   },
      //   {
      //     date: "2016-05-01",
      //     timer: "13:00",
      //     road: "DRTS 平日線",
      //     people: "20人",
      //     localStart: "尖石鄉公所",
      //     localEnd: "薰衣草森林腳下",
      //     phone: "0987654321",
      //     status: "客上",
      //     statusCode: "custome",
      //   },
      //   {
      //     date: "2016-05-08",
      //     timer: "13:00",
      //     road: "DRTS 平日線",
      //     people: "20人",
      //     localStart: "尖石鄉公所",
      //     localEnd: "薰衣草森林腳下",
      //     phone: "0987654321",
      //     status: "已完成",
      //     statusCode: "finish",
      //   },
      //   {
      //     date: "2016-05-06",
      //     timer: "13:00",
      //     road: "DRTS 平日線",
      //     people: "7人",
      //     localStart: "尖石鄉公所",
      //     localEnd: "薰衣草森林腳下",
      //     phone: "0987654321",
      //     status: "取消",
      //     statusCode: "cancel",
      //   },
      //   {
      //     date: "2016-05-07",
      //     timer: "13:00",
      //     road: "DRTS 平日線",
      //     people: "10人",
      //     localStart: "尖石鄉公所",
      //     localEnd: "薰衣草森林腳下",
      //     phone: "0987654321",
      //     status: "新訂單",
      //     statusCode: "new",
      //   },
      // ],
      getCar: "whiteCar",
      carMethod: [
        {
          value: "whiteCar",
          label: "白牌車",
        },
        // {
        //   value: "bus",
        //   label: "巴士",
        // },
      ],
      getStatus: "all",

      /* update dialog */
      dialogEditVisible: false,
      temp: {
        orderStatus: "",
        reserveName: "",
        town: "SSTW",
        village: "",
        userType: "",
        name: window.localStorage.getItem("userName"),
        reserveDate: "",
        fromTime: "",
        fromAddr: "",
        fromLng: "",
        fromLat: "",
        toTime: "",
        toAddr: "",
        toLng: "",
        toLat: "",
        hasTransfer: "",
        transferTraffic: "",
        transferOperator: "",
        transferTraffic2: "",
        transferOperator2: "",
        transferTraffic3: "",
        transferOperator3: "",
        transferPurpose: "",
        stationLineId: "",
        stationType: "共享車隊",
        contactPhone: "",
        carpoolNum: 0,
        birthday: "",
      },
      rules: {
        reserveName: [
          { required: true, message: "請輸入預約人員", tigger: "blur" },
        ],
        contactPhone: [
          { required: true, message: "請輸入預約人員電話", tigger: "blur" },
        ],
        town: [{ required: true, message: "請選擇鄉鎮", tigger: "change" }],
        village: [{ required: true, message: "請輸入村里", tigger: "blur" }],
        userType: [{ required: true, message: "請輸入身分", tigger: "blur" }],
        name: [{ required: true, message: "請輸入乘客姓名", tigger: "change" }],
        birthday: [{ required: true, message: "請選擇生日", tigger: "change" }],
        carpoolNum: [{ required: true, message: "請選擇共乘人數" }],
        reserveDate: [
          { required: true, message: "請選擇預約日期", tigger: "change" },
        ],
        fromTime: [
          { required: true, message: "請選擇上車時間", tigger: "change" },
        ],
        fromAddr: [
          { required: true, message: "請輸入上車地點", tigger: "change" },
        ],
        fromLng: [{ required: true, message: "請輸入上車地點經度" }],
        fromLat: [{ required: true, message: "請輸入上車地點緯度" }],
        toTime: [
          { required: true, message: "請選擇下車時間", tigger: "change" },
        ],
        toAddr: [{ required: true, message: "請輸入下車地點", tigger: "blur" }],
        toLng: [{ required: true, message: "請輸入下車地點經度" }],
        toLat: [{ required: true, message: "請輸入下車地點緯度" }],
        hasTransfer: [
          { required: true, message: "請選擇是否轉乘", tigger: "change" },
        ],
        transferTraffic: [
          { required: true, message: "請選擇轉乘運具1", tigger: "change" },
        ],
        transferOperator: [
          { required: true, message: "請選擇轉乘業者1", tigger: "change" },
        ],
        transferTraffic2: [
          { required: true, message: "請選擇轉乘運具2", tigger: "change" },
        ],
        transferOperator2: [
          { required: true, message: "請選擇轉乘業者2", tigger: "change" },
        ],
        transferPurpose: [
          { required: true, message: "請選擇轉乘目的", tigger: "change" },
        ],
      },

      disBeforeTime: {
        disabledDate(date) {
          return date.getTime() < Date.now() - 24 * 60 * 60 * 1000;
        },
      },
      disAfterDate: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
    };
  },
  computed: {
    timeStartTime() {
      let time;
      if (this.temp.reserveDate !== moment(new Date()).format("YYYY-MM-DD")) {
        time = "06:00";
      } else {
        let nowHr = moment().format("HH");
        let nowMin =
          (Math.floor(moment().format("hh:mm").split(":")[1] / 10) + 1) * 10;

        if (nowMin == 60) {
          nowMin = "00";
          nowHr++;
        }

        time = `${nowHr}:${nowMin}`;
      }
      return time;
    },
  },
  methods: {
    async reload() {
      const loadData = {
        page: 1,
        limit: 1000,
      };
      await api.LoadOrder(loadData).then((res) => {
        this.whiteCarData = res.data.data
          .filter(
            (resp) =>
              resp.createUserId === window.localStorage.getItem("userID")
          )
          .map((it) => {
            it.reserveName = it.createUserName;
            return it;
          });
        this.$store.dispatch("loadingHandler", false);
      });
    },

    handleUpdate(row) {
      this.temp = Object.assign({}, row);
      this.dialogEditVisible = true;
    },
    updateData() {
      this.$refs["dataForm"].validate((valid) => {
        if (valid) {
          this.$store.dispatch("loadingHandler", true);
          api.OrdersUpdate(this.temp).then((res) => {
            if (res.data.code == 200) {
              this.$message({
                type: "success",
                message: "修改成功!",
              });
              this.reload();
            } else {
              this.$message({
                type: "warning",
                message: res.data.message,
              });
            }
            this.dialogEditVisible = false;
            this.$store.dispatch("loadingHandler", false);
          });
        } else {
          this.$nextTick(() => {
            let isError = document.getElementsByClassName("is-error");
            isError[0].scrollIntoView({
              // start, center, end, nearest
              block: "center",
              // auto, instant, smooth
              behavior: "smooth",
            });
          });
        }
      });
    },
  },
  mounted() {
    this.$store.dispatch("loadingHandler", true);
    this.reload();
  },
};
</script>

<style lang="scss">
#orderInfo {
  .el-row {
    .el-col {
      padding: 0;
    }
  }
  .dateBG {
    background: #fef4e5;
  }
  .orderInfoList {
    border-top: 0.5px solid #bbbbbb;
    border-bottom: 0.5px solid #bbbbbb;
    &__top {
      background: white;
      border-bottom: 0.5px solid #eeeeee;
      label {
        font-size: 12px;
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
      }
      p {
        font-size: 14px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.65);
      }
      strong {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.65);
      }
      span {
        font-size: 16px;
        line-height: 24px;
        color: #f3411a;
        p {
          color: #f3411a;
        }
      }
    }
    &__road {
      background: white;
      label {
        font-size: 12px;
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
      }
      strong {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #3267bf;
      }
    }
    &__local {
      position: relative;
      border-top: 1px solid #eeeeee;
      border-bottom: 1px solid #eeeeee;
      font-size: 14px;
      line-height: 20px;
      color: rgba(0, 0, 0, 0.65);
      background: #fafafa;

      &::before {
        content: "";
        position: absolute;
        top: 30px;
        left: 23px;
        width: 1px;
        height: 38px;
        background: #f38c00;
      }

      &--editIcon {
        position: absolute;
        right: 4px;
        top: -10px;
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: #f38c00;

        i {
          color: white;
          font-size: 1.2rem;
        }
      }
    }
    &__delete {
      background: white;
      font-size: 16px;
      line-height: 24px;
      color: #f3411a;
    }
  }
  .el-input {
    width: 100% !important;
  }
}
</style>