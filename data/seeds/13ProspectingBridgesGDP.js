exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('gdp')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('gdp').insert([
        {
          bridgeId: 14,
          2015: 706.12,
          2016: 734.55,
          2017: 752.11,
          2018: 774.24,
          2019: 791.45,
          2020: 750.14,
          2021: 879.45,
          2022: 970.14,
          2023: 1047.12,
          2024: 1100.89,
        },
        {
          bridgeId: 18,
          2015: 708.08,
          2016: 726.35,
          2017: 762.91,
          2018: 772.94,
          2019: 781.45,
          2020: 760.11,
          2021: 860.11,
          2022: 960.14,
          2023: 1020.17,
          2024: 1070.24,
        },
        {
          bridgeId: 460,
          2015: 518.08,
          2016: 526.45,
          2017: 563.09,
          2018: 598.04,
          2019: 616.49,
          2020: 606.9,
          2021: 616.89,
          2022: 740.19,
          2023: 800.92,
          2024: 850.99,
        },
        {
          bridgeId: 688,
          2015: 708.08,
          2016: 726.55,
          2017: 762.91,
          2018: 772.94,
          2019: 781.45,
          2020: 760.11,
          2021: 909.45,
          2022: 970.14,
          2023: 1047.12,
          2024: 1100.89,
        },
        {
          bridgeId: 689,
          2015: 698.46,
          2016: 704.51,
          2017: 719.79,
          2018: 723.34,
          2019: 764.25,
          2020: 744.31,
          2021: 856.45,
          2022: 910.04,
          2023: 956.45,
          2024: 1000.79,
        },
        {
          bridgeId: 770,
          2015: 808.08,
          2016: 816.54,
          2017: 852.81,
          2018: 892.64,
          2019: 901.49,
          2020: 880.19,
          2021: 920.35,
          2022: 950.14,
          2023: 1145.62,
          2024: 1230.79,
        },
        {
          bridgeId: 784,
          2015: 538.19,
          2016: 546.79,
          2017: 602.11,
          2018: 631.24,
          2019: 670.88,
          2020: 640.21,
          2021: 679.25,
          2022: 790.04,
          2023: 850.22,
          2024: 920.59,
        },
        {
          bridgeId: 847,
          2015: 654.38,
          2016: 773.25,
          2017: 789.08,
          2018: 818.24,
          2019: 859.96,
          2020: 820.41,
          2021: 840.45,
          2022: 890.98,
          2023: 1000.22,
          2024: 1089.89,
        },
        {
          bridgeId: 899,
          2015: 518.18,
          2016: 542.47,
          2017: 553.99,
          2018: 583.45,
          2019: 611.29,
          2020: 600.18,
          2021: 720.45,
          2022: 800.14,
          2023: 880.12,
          2024: 960.89,
        },
        {
          bridgeId: 924,
          2015: 902.98,
          2016: 922.51,
          2017: 960.21,
          2018: 1002.24,
          2019: 1050.25,
          2020: 1000.91,
          2021: 1050.25,
          2022: 1160.34,
          2023: 1220.82,
          2024: 1300.49,
        },
        {
          bridgeId: 925,
          2015: 708.08,
          2016: 726.55,
          2017: 762.91,
          2018: 772.94,
          2019: 781.45,
          2020: 760.11,
          2021: 909.45,
          2022: 970.14,
          2023: 1047.12,
          2024: 1100.89,
        },
        {
          bridgeId: 929,
          2015: 678.08,
          2016: 686.25,
          2017: 710.57,
          2018: 732.24,
          2019: 780.67,
          2020: 750.21,
          2021: 769.45,
          2022: 800.54,
          2023: 930.32,
          2024: 1040.39,
        },
        {
          bridgeId: 1029,
          2015: 778.78,
          2016: 802.75,
          2017: 843.12,
          2018: 860.32,
          2019: 900.25,
          2020: 870.21,
          2021: 1000.45,
          2022: 1080.84,
          2023: 1140.32,
          2024: 1210.99,
        },
        {
          bridgeId: 1420,
          2015: 402.1,
          2016: 423.14,
          2017: 472.95,
          2018: 510.87,
          2019: 550.58,
          2020: 520.21,
          2021: 530.34,
          2022: 670.14,
          2023: 757.22,
          2024: 830.02,
        },
      ]);
    });
};
