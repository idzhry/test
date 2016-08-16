angular.module('starter')

  .config(function ($ionicConfigProvider, ionicDatePickerProvider) {

    var datePickerObj = {
      setLabel: '设定',
      todayLabel: '今天',
      closeLabel: '关闭',
      mondayFirst: false,
      inputDate: new Date(),
      weeksList: ["日", "一", "二", "三", "四", "五", "六"],
      monthsList: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      templateType: 'modal',
      showTodayButton: true,
      dateFormat: 'yyyy-MM-dd',
      closeOnSelect: false,
      disableWeekdays: [],
      from: new Date(1950, 1, 1),
      to: new Date(2018, 1, 1)
    };

    ionicDatePickerProvider.configDatePicker(datePickerObj);

    $ionicConfigProvider.tabs.position('bottom');

  });
