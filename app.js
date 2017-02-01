 var unitConverter = angular.module("UnitConverter", [])
 /* converstion unit rates retrieved from https://www.disabled-world.com/artman/publish/metric-imperial.shtml http://convert.frenc-property.co.uk */

 unitConverter.controller('UnitConverterController', [ 
    '$scope', function($scope){
         
         var ucc = this;
         
         //attributes
        ucc.volumeValue = 0;

        ucc.metric_volume_units = 
        [
            {
                unit_name: "Cubic Centimeters",
                unit_code: "cm3",
                type: "metric"
            },
            {
                unit_name: "Cubic Decimeters",
                unit_code: "m3",
                type: "metric"
            },
            {
                unit_name: "Cubic Meters",
                unit_code: "cm3",
                type: "metric"
            },
            {
                unit_name: "Liter",
                unit_code: "l",
                type: "metric"
            },
            {
                unit_name: "Hectoliter",
                unit_code: "hl",
                type: "metric"
            }
        ];
    
        ucc.lengthValue = 0;
    
        ucc.metric_length_units = 
        [
            {
                unit_name: "Millimeters",
                unit_code: "mm",
                type: "metric"
            },
            {
                unit_name: "Centimeters",
                unit_code: "cm",
                type: "metric"
            },
            {
                unit_name: "Meters",
                unit_code: "m",
                type: "metric"
            },
            {
                unit_name: "Kilometers",
                unit_code: "km",
                type: "metric"
            }
        ];
    
    ucc.massValue= 0;
    
    ucc.metric_mass_units = 
    [
        {
            unit_name: "Milligrams",
            unit_code: "mg",
            type: "metric"
        },
        {
            unit_name: "Grams",
            unit_code: "g",
            type: "metric"
        },
        {
            unit_name: "Kilograms",
            unit_code: "kg",
            type: "metric"
        },
        {
            unit_name: "Tons",
            unit_code: "t",
            type: "metric"
        }
    ];
    
         function volumeUpdated(){
             console.log(ucc.volumeValue);
         }
         
         function lengthUpdated(){
             console.log(ucc.lengthValue);
         }
         
        function massUpdated(){
             console.log(ucc.massValue);
         }
         
        $scope.$watch('ucc.volumeValue', volumeUpdated);
        $scope.$watch('ucc.lengthValue', lengthUpdated);
        $scope.$watch('ucc.massValue', massUpdated);
         
        ucc.selected_volume_unit = ucc.metric_volume_units[0];
        ucc.selected_length_unit = ucc.metric_length_units[0];
        ucc.selected_mass_unit = ucc.metric_mass_units[0];
         
         //behaviors
        ucc.showSelectd = function(){
            console.log(ucc.selected_volume_unit.unit_name);
        };
        
        ucc.showSelected_Length_Unit = function(){
            console.log(ucc.selected_length_unit.unit_name);
        };

        ucc.showSelected_Mass_Unit = function(){
            console.log(ucc.selected_mass_unit.unit_name);
        };
     }
]);