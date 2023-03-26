// Auto Check In
// 该脚本用于自动签到
// https://github.com/ConnersHua/Profiles/blob/master/Quantumult/Task/AutoCheckin.conf

const wifi = $network.wifi.ssid;
$notification.post('wifi', '副标题', wifi);

if (wifi === "MyHomeWifi") {
  const checkinUrl = "https://example.com/checkin";
  $httpClient.get(checkinUrl, (error, response, data) => {
    if (error) {
      console.log(error);
      $notification.post("Auto Check In", "Failed", error);
    } else {
      console.log(data);
      $notification.post("Auto Check In", "Success", data);
    }
  });
}
