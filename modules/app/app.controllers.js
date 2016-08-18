angular.module('starter.controllers', [])

  .controller('HomeCtrl', function ($scope, ionicDatePicker) {

    $scope.selectedDate1;
    $scope.selectedDate2 = new Date();

    //$scope.openDatePickerOne = function (val) {
    //  var ipObj1 = {
    //    callback: function (val) {  //Mandatory
    //      console.log('Return value from the datepicker popup is : ' + val, new Date(val));
    //      $scope.selectedDate1 = new Date(val);
    //    },
    //    from: new Date(2012, 1, 1),
    //    to: new Date(2016, 10, 30),
    //    inputDate: new Date(),
    //    mondayFirst: true,
    //    disableWeekdays: [],
    //    closeOnSelect: false,
    //    templateType: 'popup'
    //  };
    //  ionicDatePicker.openDatePicker(ipObj1);
    //};

    $scope.openDatePickerTwo = function (val) {
      var ipObj1 = {
        callback: function (val) {  //Mandatory
          console.log('Return value from the datepicker modal is : ' + val, new Date(val));
          $scope.selectedDate2 = new Date(val);
        },
        disabledDates: [
          new Date(2016, 8, 25)
        ],
        inputDate: $scope.selectedDate2,
        mondayFirst: true,
        showTodayButton: true,
        closeOnSelect: false,
        templateType: 'modal'
      };
      ionicDatePicker.openDatePicker(ipObj1);
    }
  })

  .controller('ListCtrl', function ($scope) {

  })

  .controller('ContactCtrl', function ($scope) {

  });
