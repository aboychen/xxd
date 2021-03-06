var teamship_data = {
		/**
	 * 0 : id, smallint, 数据ID
	 * 1 : level, smallint, 团队单项加成等级
	 * 2 : needs_relationship, int, 所需友情点数
	 * 3 : health, int, 生命项加成
	 * 4 : attack, int, 攻击项加成
	 * 5 : defence, int, 防御项加成 
	*/


	Id : 0,
	Level : 1,
	Needs_relationship : 2,
	Health : 3,
	Attack : 4,
	Defence : 5,

	Each: function(cb) {
		for(var i = 0; i < this._list.length; i++) {
			cb(this._list[i]);
		}
	},

	_list: [
		[241 /*[0]*/, 0 /*[1]*/, 10 /*[2]*/, 0 /*[3]*/, 0 /*[4]*/, 0 /*[5]*/],
		[242 /*[0]*/, 1 /*[1]*/, 10 /*[2]*/, 30 /*[3]*/, 5 /*[4]*/, 3 /*[5]*/],
		[243 /*[0]*/, 2 /*[1]*/, 10 /*[2]*/, 60 /*[3]*/, 10 /*[4]*/, 6 /*[5]*/],
		[244 /*[0]*/, 3 /*[1]*/, 20 /*[2]*/, 90 /*[3]*/, 15 /*[4]*/, 9 /*[5]*/],
		[245 /*[0]*/, 4 /*[1]*/, 20 /*[2]*/, 120 /*[3]*/, 20 /*[4]*/, 12 /*[5]*/],
		[246 /*[0]*/, 5 /*[1]*/, 20 /*[2]*/, 150 /*[3]*/, 25 /*[4]*/, 15 /*[5]*/],
		[247 /*[0]*/, 6 /*[1]*/, 30 /*[2]*/, 180 /*[3]*/, 30 /*[4]*/, 18 /*[5]*/],
		[248 /*[0]*/, 7 /*[1]*/, 40 /*[2]*/, 210 /*[3]*/, 35 /*[4]*/, 21 /*[5]*/],
		[249 /*[0]*/, 8 /*[1]*/, 50 /*[2]*/, 240 /*[3]*/, 40 /*[4]*/, 24 /*[5]*/],
		[250 /*[0]*/, 9 /*[1]*/, 60 /*[2]*/, 270 /*[3]*/, 45 /*[4]*/, 27 /*[5]*/],
		[251 /*[0]*/, 10 /*[1]*/, 70 /*[2]*/, 300 /*[3]*/, 50 /*[4]*/, 30 /*[5]*/],
		[252 /*[0]*/, 11 /*[1]*/, 80 /*[2]*/, 330 /*[3]*/, 55 /*[4]*/, 33 /*[5]*/],
		[253 /*[0]*/, 12 /*[1]*/, 90 /*[2]*/, 360 /*[3]*/, 60 /*[4]*/, 36 /*[5]*/],
		[254 /*[0]*/, 13 /*[1]*/, 100 /*[2]*/, 390 /*[3]*/, 65 /*[4]*/, 39 /*[5]*/],
		[255 /*[0]*/, 14 /*[1]*/, 110 /*[2]*/, 420 /*[3]*/, 70 /*[4]*/, 42 /*[5]*/],
		[256 /*[0]*/, 15 /*[1]*/, 120 /*[2]*/, 450 /*[3]*/, 75 /*[4]*/, 45 /*[5]*/],
		[257 /*[0]*/, 16 /*[1]*/, 130 /*[2]*/, 480 /*[3]*/, 80 /*[4]*/, 48 /*[5]*/],
		[258 /*[0]*/, 17 /*[1]*/, 150 /*[2]*/, 510 /*[3]*/, 85 /*[4]*/, 51 /*[5]*/],
		[259 /*[0]*/, 18 /*[1]*/, 170 /*[2]*/, 540 /*[3]*/, 90 /*[4]*/, 54 /*[5]*/],
		[260 /*[0]*/, 19 /*[1]*/, 190 /*[2]*/, 570 /*[3]*/, 95 /*[4]*/, 57 /*[5]*/],
		[261 /*[0]*/, 20 /*[1]*/, 210 /*[2]*/, 600 /*[3]*/, 100 /*[4]*/, 60 /*[5]*/],
		[262 /*[0]*/, 21 /*[1]*/, 220 /*[2]*/, 630 /*[3]*/, 105 /*[4]*/, 63 /*[5]*/],
		[263 /*[0]*/, 22 /*[1]*/, 230 /*[2]*/, 660 /*[3]*/, 110 /*[4]*/, 66 /*[5]*/],
		[264 /*[0]*/, 23 /*[1]*/, 240 /*[2]*/, 690 /*[3]*/, 115 /*[4]*/, 69 /*[5]*/],
		[265 /*[0]*/, 24 /*[1]*/, 250 /*[2]*/, 720 /*[3]*/, 120 /*[4]*/, 72 /*[5]*/],
		[266 /*[0]*/, 25 /*[1]*/, 270 /*[2]*/, 750 /*[3]*/, 125 /*[4]*/, 75 /*[5]*/],
		[267 /*[0]*/, 26 /*[1]*/, 290 /*[2]*/, 780 /*[3]*/, 130 /*[4]*/, 78 /*[5]*/],
		[268 /*[0]*/, 27 /*[1]*/, 310 /*[2]*/, 810 /*[3]*/, 135 /*[4]*/, 81 /*[5]*/],
		[269 /*[0]*/, 28 /*[1]*/, 330 /*[2]*/, 840 /*[3]*/, 140 /*[4]*/, 84 /*[5]*/],
		[270 /*[0]*/, 29 /*[1]*/, 350 /*[2]*/, 870 /*[3]*/, 145 /*[4]*/, 87 /*[5]*/],
		[271 /*[0]*/, 30 /*[1]*/, 370 /*[2]*/, 900 /*[3]*/, 150 /*[4]*/, 90 /*[5]*/],
		[272 /*[0]*/, 31 /*[1]*/, 390 /*[2]*/, 930 /*[3]*/, 155 /*[4]*/, 93 /*[5]*/],
		[273 /*[0]*/, 32 /*[1]*/, 410 /*[2]*/, 960 /*[3]*/, 160 /*[4]*/, 96 /*[5]*/],
		[274 /*[0]*/, 33 /*[1]*/, 430 /*[2]*/, 990 /*[3]*/, 165 /*[4]*/, 99 /*[5]*/],
		[275 /*[0]*/, 34 /*[1]*/, 450 /*[2]*/, 1020 /*[3]*/, 170 /*[4]*/, 102 /*[5]*/],
		[276 /*[0]*/, 35 /*[1]*/, 470 /*[2]*/, 1050 /*[3]*/, 175 /*[4]*/, 105 /*[5]*/],
		[277 /*[0]*/, 36 /*[1]*/, 490 /*[2]*/, 1080 /*[3]*/, 180 /*[4]*/, 108 /*[5]*/],
		[278 /*[0]*/, 37 /*[1]*/, 510 /*[2]*/, 1110 /*[3]*/, 185 /*[4]*/, 111 /*[5]*/],
		[279 /*[0]*/, 38 /*[1]*/, 530 /*[2]*/, 1140 /*[3]*/, 190 /*[4]*/, 114 /*[5]*/],
		[280 /*[0]*/, 39 /*[1]*/, 550 /*[2]*/, 1170 /*[3]*/, 195 /*[4]*/, 117 /*[5]*/],
		[281 /*[0]*/, 40 /*[1]*/, 570 /*[2]*/, 1200 /*[3]*/, 200 /*[4]*/, 120 /*[5]*/],
		[282 /*[0]*/, 41 /*[1]*/, 590 /*[2]*/, 1230 /*[3]*/, 205 /*[4]*/, 123 /*[5]*/],
		[283 /*[0]*/, 42 /*[1]*/, 610 /*[2]*/, 1260 /*[3]*/, 210 /*[4]*/, 126 /*[5]*/],
		[284 /*[0]*/, 43 /*[1]*/, 630 /*[2]*/, 1290 /*[3]*/, 215 /*[4]*/, 129 /*[5]*/],
		[285 /*[0]*/, 44 /*[1]*/, 650 /*[2]*/, 1320 /*[3]*/, 220 /*[4]*/, 132 /*[5]*/],
		[286 /*[0]*/, 45 /*[1]*/, 670 /*[2]*/, 1350 /*[3]*/, 225 /*[4]*/, 135 /*[5]*/],
		[287 /*[0]*/, 46 /*[1]*/, 690 /*[2]*/, 1380 /*[3]*/, 230 /*[4]*/, 138 /*[5]*/],
		[288 /*[0]*/, 47 /*[1]*/, 710 /*[2]*/, 1410 /*[3]*/, 235 /*[4]*/, 141 /*[5]*/],
		[289 /*[0]*/, 48 /*[1]*/, 730 /*[2]*/, 1440 /*[3]*/, 240 /*[4]*/, 144 /*[5]*/],
		[290 /*[0]*/, 49 /*[1]*/, 750 /*[2]*/, 1470 /*[3]*/, 245 /*[4]*/, 147 /*[5]*/],
		[291 /*[0]*/, 50 /*[1]*/, 790 /*[2]*/, 1500 /*[3]*/, 250 /*[4]*/, 150 /*[5]*/],
		[292 /*[0]*/, 51 /*[1]*/, 830 /*[2]*/, 1530 /*[3]*/, 255 /*[4]*/, 153 /*[5]*/],
		[293 /*[0]*/, 52 /*[1]*/, 870 /*[2]*/, 1560 /*[3]*/, 260 /*[4]*/, 156 /*[5]*/],
		[294 /*[0]*/, 53 /*[1]*/, 910 /*[2]*/, 1590 /*[3]*/, 265 /*[4]*/, 159 /*[5]*/],
		[295 /*[0]*/, 54 /*[1]*/, 950 /*[2]*/, 1620 /*[3]*/, 270 /*[4]*/, 162 /*[5]*/],
		[296 /*[0]*/, 55 /*[1]*/, 990 /*[2]*/, 1650 /*[3]*/, 275 /*[4]*/, 165 /*[5]*/],
		[297 /*[0]*/, 56 /*[1]*/, 1030 /*[2]*/, 1680 /*[3]*/, 280 /*[4]*/, 168 /*[5]*/],
		[298 /*[0]*/, 57 /*[1]*/, 1070 /*[2]*/, 1710 /*[3]*/, 285 /*[4]*/, 171 /*[5]*/],
		[299 /*[0]*/, 58 /*[1]*/, 1110 /*[2]*/, 1740 /*[3]*/, 290 /*[4]*/, 174 /*[5]*/],
		[300 /*[0]*/, 59 /*[1]*/, 1150 /*[2]*/, 1770 /*[3]*/, 295 /*[4]*/, 177 /*[5]*/],
		[301 /*[0]*/, 60 /*[1]*/, 1200 /*[2]*/, 1800 /*[3]*/, 300 /*[4]*/, 180 /*[5]*/],
		[302 /*[0]*/, 61 /*[1]*/, 1250 /*[2]*/, 1830 /*[3]*/, 305 /*[4]*/, 183 /*[5]*/],
		[303 /*[0]*/, 62 /*[1]*/, 1300 /*[2]*/, 1860 /*[3]*/, 310 /*[4]*/, 186 /*[5]*/],
		[304 /*[0]*/, 63 /*[1]*/, 1350 /*[2]*/, 1890 /*[3]*/, 315 /*[4]*/, 189 /*[5]*/],
		[305 /*[0]*/, 64 /*[1]*/, 1400 /*[2]*/, 1920 /*[3]*/, 320 /*[4]*/, 192 /*[5]*/],
		[306 /*[0]*/, 65 /*[1]*/, 1450 /*[2]*/, 1950 /*[3]*/, 325 /*[4]*/, 195 /*[5]*/],
		[307 /*[0]*/, 66 /*[1]*/, 1500 /*[2]*/, 1980 /*[3]*/, 330 /*[4]*/, 198 /*[5]*/],
		[308 /*[0]*/, 67 /*[1]*/, 1550 /*[2]*/, 2010 /*[3]*/, 335 /*[4]*/, 201 /*[5]*/],
		[309 /*[0]*/, 68 /*[1]*/, 1600 /*[2]*/, 2040 /*[3]*/, 340 /*[4]*/, 204 /*[5]*/],
		[310 /*[0]*/, 69 /*[1]*/, 1650 /*[2]*/, 2070 /*[3]*/, 345 /*[4]*/, 207 /*[5]*/],
		[311 /*[0]*/, 70 /*[1]*/, 1720 /*[2]*/, 2100 /*[3]*/, 350 /*[4]*/, 210 /*[5]*/],
		[312 /*[0]*/, 71 /*[1]*/, 1790 /*[2]*/, 2130 /*[3]*/, 355 /*[4]*/, 213 /*[5]*/],
		[313 /*[0]*/, 72 /*[1]*/, 1860 /*[2]*/, 2160 /*[3]*/, 360 /*[4]*/, 216 /*[5]*/],
		[314 /*[0]*/, 73 /*[1]*/, 1930 /*[2]*/, 2190 /*[3]*/, 365 /*[4]*/, 219 /*[5]*/],
		[315 /*[0]*/, 74 /*[1]*/, 2000 /*[2]*/, 2220 /*[3]*/, 370 /*[4]*/, 222 /*[5]*/],
		[316 /*[0]*/, 75 /*[1]*/, 2070 /*[2]*/, 2250 /*[3]*/, 375 /*[4]*/, 225 /*[5]*/],
		[317 /*[0]*/, 76 /*[1]*/, 2140 /*[2]*/, 2280 /*[3]*/, 380 /*[4]*/, 228 /*[5]*/],
		[318 /*[0]*/, 77 /*[1]*/, 2210 /*[2]*/, 2310 /*[3]*/, 385 /*[4]*/, 231 /*[5]*/],
		[319 /*[0]*/, 78 /*[1]*/, 2280 /*[2]*/, 2340 /*[3]*/, 390 /*[4]*/, 234 /*[5]*/],
		[320 /*[0]*/, 79 /*[1]*/, 2350 /*[2]*/, 2370 /*[3]*/, 395 /*[4]*/, 237 /*[5]*/],
		[321 /*[0]*/, 80 /*[1]*/, 2450 /*[2]*/, 2400 /*[3]*/, 400 /*[4]*/, 240 /*[5]*/],
		[322 /*[0]*/, 81 /*[1]*/, 2550 /*[2]*/, 2430 /*[3]*/, 405 /*[4]*/, 243 /*[5]*/],
		[323 /*[0]*/, 82 /*[1]*/, 2650 /*[2]*/, 2460 /*[3]*/, 410 /*[4]*/, 246 /*[5]*/],
		[324 /*[0]*/, 83 /*[1]*/, 2750 /*[2]*/, 2490 /*[3]*/, 415 /*[4]*/, 249 /*[5]*/],
		[325 /*[0]*/, 84 /*[1]*/, 2850 /*[2]*/, 2520 /*[3]*/, 420 /*[4]*/, 252 /*[5]*/],
		[326 /*[0]*/, 85 /*[1]*/, 2950 /*[2]*/, 2550 /*[3]*/, 425 /*[4]*/, 255 /*[5]*/],
		[327 /*[0]*/, 86 /*[1]*/, 3050 /*[2]*/, 2580 /*[3]*/, 430 /*[4]*/, 258 /*[5]*/],
		[328 /*[0]*/, 87 /*[1]*/, 3150 /*[2]*/, 2610 /*[3]*/, 435 /*[4]*/, 261 /*[5]*/],
		[329 /*[0]*/, 88 /*[1]*/, 3250 /*[2]*/, 2640 /*[3]*/, 440 /*[4]*/, 264 /*[5]*/],
		[330 /*[0]*/, 89 /*[1]*/, 3350 /*[2]*/, 2670 /*[3]*/, 445 /*[4]*/, 267 /*[5]*/],
		[331 /*[0]*/, 90 /*[1]*/, 3450 /*[2]*/, 2700 /*[3]*/, 450 /*[4]*/, 270 /*[5]*/],
		[332 /*[0]*/, 91 /*[1]*/, 3550 /*[2]*/, 2730 /*[3]*/, 455 /*[4]*/, 273 /*[5]*/],
		[333 /*[0]*/, 92 /*[1]*/, 3650 /*[2]*/, 2760 /*[3]*/, 460 /*[4]*/, 276 /*[5]*/],
		[334 /*[0]*/, 93 /*[1]*/, 3750 /*[2]*/, 2790 /*[3]*/, 465 /*[4]*/, 279 /*[5]*/],
		[335 /*[0]*/, 94 /*[1]*/, 3850 /*[2]*/, 2820 /*[3]*/, 470 /*[4]*/, 282 /*[5]*/],
		[336 /*[0]*/, 95 /*[1]*/, 3950 /*[2]*/, 2850 /*[3]*/, 475 /*[4]*/, 285 /*[5]*/],
		[337 /*[0]*/, 96 /*[1]*/, 4050 /*[2]*/, 2880 /*[3]*/, 480 /*[4]*/, 288 /*[5]*/],
		[338 /*[0]*/, 97 /*[1]*/, 4150 /*[2]*/, 2910 /*[3]*/, 485 /*[4]*/, 291 /*[5]*/],
		[339 /*[0]*/, 98 /*[1]*/, 4250 /*[2]*/, 2940 /*[3]*/, 490 /*[4]*/, 294 /*[5]*/],
		[340 /*[0]*/, 99 /*[1]*/, 4350 /*[2]*/, 2970 /*[3]*/, 495 /*[4]*/, 297 /*[5]*/],
		[341 /*[0]*/, 100 /*[1]*/, 4450 /*[2]*/, 3000 /*[3]*/, 500 /*[4]*/, 300 /*[5]*/],
		[342 /*[0]*/, 101 /*[1]*/, 4550 /*[2]*/, 3030 /*[3]*/, 505 /*[4]*/, 303 /*[5]*/],
		[343 /*[0]*/, 102 /*[1]*/, 4650 /*[2]*/, 3060 /*[3]*/, 510 /*[4]*/, 306 /*[5]*/],
		[344 /*[0]*/, 103 /*[1]*/, 4750 /*[2]*/, 3090 /*[3]*/, 515 /*[4]*/, 309 /*[5]*/],
		[345 /*[0]*/, 104 /*[1]*/, 4850 /*[2]*/, 3120 /*[3]*/, 520 /*[4]*/, 312 /*[5]*/],
		[346 /*[0]*/, 105 /*[1]*/, 4950 /*[2]*/, 3150 /*[3]*/, 525 /*[4]*/, 315 /*[5]*/],
		[347 /*[0]*/, 106 /*[1]*/, 5050 /*[2]*/, 3180 /*[3]*/, 530 /*[4]*/, 318 /*[5]*/],
		[348 /*[0]*/, 107 /*[1]*/, 5150 /*[2]*/, 3210 /*[3]*/, 535 /*[4]*/, 321 /*[5]*/],
		[349 /*[0]*/, 108 /*[1]*/, 5250 /*[2]*/, 3240 /*[3]*/, 540 /*[4]*/, 324 /*[5]*/],
		[350 /*[0]*/, 109 /*[1]*/, 5350 /*[2]*/, 3270 /*[3]*/, 545 /*[4]*/, 327 /*[5]*/],
		[351 /*[0]*/, 110 /*[1]*/, 5450 /*[2]*/, 3300 /*[3]*/, 550 /*[4]*/, 330 /*[5]*/],
		[352 /*[0]*/, 111 /*[1]*/, 5550 /*[2]*/, 3330 /*[3]*/, 555 /*[4]*/, 333 /*[5]*/],
		[353 /*[0]*/, 112 /*[1]*/, 5650 /*[2]*/, 3360 /*[3]*/, 560 /*[4]*/, 336 /*[5]*/],
		[354 /*[0]*/, 113 /*[1]*/, 5750 /*[2]*/, 3390 /*[3]*/, 565 /*[4]*/, 339 /*[5]*/],
		[355 /*[0]*/, 114 /*[1]*/, 5850 /*[2]*/, 3420 /*[3]*/, 570 /*[4]*/, 342 /*[5]*/],
		[356 /*[0]*/, 115 /*[1]*/, 5950 /*[2]*/, 3450 /*[3]*/, 575 /*[4]*/, 345 /*[5]*/],
		[357 /*[0]*/, 116 /*[1]*/, 6050 /*[2]*/, 3480 /*[3]*/, 580 /*[4]*/, 348 /*[5]*/],
		[358 /*[0]*/, 117 /*[1]*/, 6150 /*[2]*/, 3510 /*[3]*/, 585 /*[4]*/, 351 /*[5]*/],
		[359 /*[0]*/, 118 /*[1]*/, 6250 /*[2]*/, 3540 /*[3]*/, 590 /*[4]*/, 354 /*[5]*/],
		[360 /*[0]*/, 119 /*[1]*/, 6350 /*[2]*/, 3570 /*[3]*/, 595 /*[4]*/, 357 /*[5]*/],
		[361 /*[0]*/, 120 /*[1]*/, 6450 /*[2]*/, 3600 /*[3]*/, 600 /*[4]*/, 360 /*[5]*/],
		[362 /*[0]*/, 121 /*[1]*/, 6550 /*[2]*/, 3630 /*[3]*/, 605 /*[4]*/, 363 /*[5]*/],
		[363 /*[0]*/, 122 /*[1]*/, 6650 /*[2]*/, 3660 /*[3]*/, 610 /*[4]*/, 366 /*[5]*/],
		[364 /*[0]*/, 123 /*[1]*/, 6750 /*[2]*/, 3690 /*[3]*/, 615 /*[4]*/, 369 /*[5]*/],
		[365 /*[0]*/, 124 /*[1]*/, 6850 /*[2]*/, 3720 /*[3]*/, 620 /*[4]*/, 372 /*[5]*/],
		[366 /*[0]*/, 125 /*[1]*/, 6950 /*[2]*/, 3750 /*[3]*/, 625 /*[4]*/, 375 /*[5]*/],
		[367 /*[0]*/, 126 /*[1]*/, 7050 /*[2]*/, 3780 /*[3]*/, 630 /*[4]*/, 378 /*[5]*/],
		[368 /*[0]*/, 127 /*[1]*/, 7150 /*[2]*/, 3810 /*[3]*/, 635 /*[4]*/, 381 /*[5]*/],
		[369 /*[0]*/, 128 /*[1]*/, 7250 /*[2]*/, 3840 /*[3]*/, 640 /*[4]*/, 384 /*[5]*/],
		[370 /*[0]*/, 129 /*[1]*/, 7350 /*[2]*/, 3870 /*[3]*/, 645 /*[4]*/, 387 /*[5]*/],
		[371 /*[0]*/, 130 /*[1]*/, 7450 /*[2]*/, 3900 /*[3]*/, 650 /*[4]*/, 390 /*[5]*/],
		[372 /*[0]*/, 131 /*[1]*/, 7550 /*[2]*/, 3930 /*[3]*/, 655 /*[4]*/, 393 /*[5]*/],
		[373 /*[0]*/, 132 /*[1]*/, 7650 /*[2]*/, 3960 /*[3]*/, 660 /*[4]*/, 396 /*[5]*/],
		[374 /*[0]*/, 133 /*[1]*/, 7750 /*[2]*/, 3990 /*[3]*/, 665 /*[4]*/, 399 /*[5]*/],
		[375 /*[0]*/, 134 /*[1]*/, 7850 /*[2]*/, 4020 /*[3]*/, 670 /*[4]*/, 402 /*[5]*/],
		[376 /*[0]*/, 135 /*[1]*/, 7950 /*[2]*/, 4050 /*[3]*/, 675 /*[4]*/, 405 /*[5]*/],
		[377 /*[0]*/, 136 /*[1]*/, 8050 /*[2]*/, 4080 /*[3]*/, 680 /*[4]*/, 408 /*[5]*/],
		[378 /*[0]*/, 137 /*[1]*/, 8150 /*[2]*/, 4110 /*[3]*/, 685 /*[4]*/, 411 /*[5]*/],
		[379 /*[0]*/, 138 /*[1]*/, 8250 /*[2]*/, 4140 /*[3]*/, 690 /*[4]*/, 414 /*[5]*/],
		[380 /*[0]*/, 139 /*[1]*/, 8350 /*[2]*/, 4170 /*[3]*/, 695 /*[4]*/, 417 /*[5]*/],
		[381 /*[0]*/, 140 /*[1]*/, 8450 /*[2]*/, 4200 /*[3]*/, 700 /*[4]*/, 420 /*[5]*/],
		[382 /*[0]*/, 141 /*[1]*/, 8550 /*[2]*/, 4230 /*[3]*/, 705 /*[4]*/, 423 /*[5]*/],
		[383 /*[0]*/, 142 /*[1]*/, 8650 /*[2]*/, 4260 /*[3]*/, 710 /*[4]*/, 426 /*[5]*/],
		[384 /*[0]*/, 143 /*[1]*/, 8750 /*[2]*/, 4290 /*[3]*/, 715 /*[4]*/, 429 /*[5]*/],
		[385 /*[0]*/, 144 /*[1]*/, 8850 /*[2]*/, 4320 /*[3]*/, 720 /*[4]*/, 432 /*[5]*/],
		[386 /*[0]*/, 145 /*[1]*/, 8950 /*[2]*/, 4350 /*[3]*/, 725 /*[4]*/, 435 /*[5]*/],
		[387 /*[0]*/, 146 /*[1]*/, 9050 /*[2]*/, 4380 /*[3]*/, 730 /*[4]*/, 438 /*[5]*/],
		[388 /*[0]*/, 147 /*[1]*/, 9150 /*[2]*/, 4410 /*[3]*/, 735 /*[4]*/, 441 /*[5]*/],
		[389 /*[0]*/, 148 /*[1]*/, 9250 /*[2]*/, 4440 /*[3]*/, 740 /*[4]*/, 444 /*[5]*/],
		[390 /*[0]*/, 149 /*[1]*/, 9350 /*[2]*/, 4470 /*[3]*/, 745 /*[4]*/, 447 /*[5]*/],
		[391 /*[0]*/, 150 /*[1]*/, 9450 /*[2]*/, 4500 /*[3]*/, 750 /*[4]*/, 450 /*[5]*/],
		[392 /*[0]*/, 151 /*[1]*/, 9550 /*[2]*/, 4530 /*[3]*/, 755 /*[4]*/, 453 /*[5]*/],
		[393 /*[0]*/, 152 /*[1]*/, 9650 /*[2]*/, 4560 /*[3]*/, 760 /*[4]*/, 456 /*[5]*/],
		[394 /*[0]*/, 153 /*[1]*/, 9750 /*[2]*/, 4590 /*[3]*/, 765 /*[4]*/, 459 /*[5]*/],
		[395 /*[0]*/, 154 /*[1]*/, 9850 /*[2]*/, 4620 /*[3]*/, 770 /*[4]*/, 462 /*[5]*/],
		[396 /*[0]*/, 155 /*[1]*/, 9950 /*[2]*/, 4650 /*[3]*/, 775 /*[4]*/, 465 /*[5]*/],
		[397 /*[0]*/, 156 /*[1]*/, 10050 /*[2]*/, 4680 /*[3]*/, 780 /*[4]*/, 468 /*[5]*/],
		[398 /*[0]*/, 157 /*[1]*/, 10150 /*[2]*/, 4710 /*[3]*/, 785 /*[4]*/, 471 /*[5]*/],
		[399 /*[0]*/, 158 /*[1]*/, 10250 /*[2]*/, 4740 /*[3]*/, 790 /*[4]*/, 474 /*[5]*/],
		[400 /*[0]*/, 159 /*[1]*/, 10350 /*[2]*/, 4770 /*[3]*/, 795 /*[4]*/, 477 /*[5]*/],
		[401 /*[0]*/, 160 /*[1]*/, 10450 /*[2]*/, 4800 /*[3]*/, 800 /*[4]*/, 480 /*[5]*/],
		[402 /*[0]*/, 161 /*[1]*/, 10550 /*[2]*/, 4830 /*[3]*/, 805 /*[4]*/, 483 /*[5]*/],
		[403 /*[0]*/, 162 /*[1]*/, 10650 /*[2]*/, 4860 /*[3]*/, 810 /*[4]*/, 486 /*[5]*/],
		[404 /*[0]*/, 163 /*[1]*/, 10750 /*[2]*/, 4890 /*[3]*/, 815 /*[4]*/, 489 /*[5]*/],
		[405 /*[0]*/, 164 /*[1]*/, 10850 /*[2]*/, 4920 /*[3]*/, 820 /*[4]*/, 492 /*[5]*/],
		[406 /*[0]*/, 165 /*[1]*/, 10950 /*[2]*/, 4950 /*[3]*/, 825 /*[4]*/, 495 /*[5]*/],
		[407 /*[0]*/, 166 /*[1]*/, 11050 /*[2]*/, 4980 /*[3]*/, 830 /*[4]*/, 498 /*[5]*/],
		[408 /*[0]*/, 167 /*[1]*/, 11150 /*[2]*/, 5010 /*[3]*/, 835 /*[4]*/, 501 /*[5]*/],
		[409 /*[0]*/, 168 /*[1]*/, 11250 /*[2]*/, 5040 /*[3]*/, 840 /*[4]*/, 504 /*[5]*/],
		[410 /*[0]*/, 169 /*[1]*/, 11350 /*[2]*/, 5070 /*[3]*/, 845 /*[4]*/, 507 /*[5]*/],
		[411 /*[0]*/, 170 /*[1]*/, 11450 /*[2]*/, 5100 /*[3]*/, 850 /*[4]*/, 510 /*[5]*/],
		[412 /*[0]*/, 171 /*[1]*/, 11550 /*[2]*/, 5130 /*[3]*/, 855 /*[4]*/, 513 /*[5]*/],
		[413 /*[0]*/, 172 /*[1]*/, 11650 /*[2]*/, 5160 /*[3]*/, 860 /*[4]*/, 516 /*[5]*/],
		[414 /*[0]*/, 173 /*[1]*/, 11750 /*[2]*/, 5190 /*[3]*/, 865 /*[4]*/, 519 /*[5]*/],
		[415 /*[0]*/, 174 /*[1]*/, 11850 /*[2]*/, 5220 /*[3]*/, 870 /*[4]*/, 522 /*[5]*/],
		[416 /*[0]*/, 175 /*[1]*/, 11950 /*[2]*/, 5250 /*[3]*/, 875 /*[4]*/, 525 /*[5]*/],
		[417 /*[0]*/, 176 /*[1]*/, 12050 /*[2]*/, 5280 /*[3]*/, 880 /*[4]*/, 528 /*[5]*/],
		[418 /*[0]*/, 177 /*[1]*/, 12150 /*[2]*/, 5310 /*[3]*/, 885 /*[4]*/, 531 /*[5]*/],
		[419 /*[0]*/, 178 /*[1]*/, 12250 /*[2]*/, 5340 /*[3]*/, 890 /*[4]*/, 534 /*[5]*/],
		[420 /*[0]*/, 179 /*[1]*/, 12350 /*[2]*/, 5370 /*[3]*/, 895 /*[4]*/, 537 /*[5]*/],
		[421 /*[0]*/, 180 /*[1]*/, 12450 /*[2]*/, 5400 /*[3]*/, 900 /*[4]*/, 540 /*[5]*/],
		[422 /*[0]*/, 181 /*[1]*/, 12550 /*[2]*/, 5430 /*[3]*/, 905 /*[4]*/, 543 /*[5]*/],
		[423 /*[0]*/, 182 /*[1]*/, 12650 /*[2]*/, 5460 /*[3]*/, 910 /*[4]*/, 546 /*[5]*/],
		[424 /*[0]*/, 183 /*[1]*/, 12750 /*[2]*/, 5490 /*[3]*/, 915 /*[4]*/, 549 /*[5]*/],
		[425 /*[0]*/, 184 /*[1]*/, 12850 /*[2]*/, 5520 /*[3]*/, 920 /*[4]*/, 552 /*[5]*/],
		[426 /*[0]*/, 185 /*[1]*/, 12950 /*[2]*/, 5550 /*[3]*/, 925 /*[4]*/, 555 /*[5]*/],
		[427 /*[0]*/, 186 /*[1]*/, 13050 /*[2]*/, 5580 /*[3]*/, 930 /*[4]*/, 558 /*[5]*/],
		[428 /*[0]*/, 187 /*[1]*/, 13150 /*[2]*/, 5610 /*[3]*/, 935 /*[4]*/, 561 /*[5]*/],
		[429 /*[0]*/, 188 /*[1]*/, 13250 /*[2]*/, 5640 /*[3]*/, 940 /*[4]*/, 564 /*[5]*/],
		[430 /*[0]*/, 189 /*[1]*/, 13350 /*[2]*/, 5670 /*[3]*/, 945 /*[4]*/, 567 /*[5]*/],
		[431 /*[0]*/, 190 /*[1]*/, 13450 /*[2]*/, 5700 /*[3]*/, 950 /*[4]*/, 570 /*[5]*/],
		[432 /*[0]*/, 191 /*[1]*/, 13550 /*[2]*/, 5730 /*[3]*/, 955 /*[4]*/, 573 /*[5]*/],
		[433 /*[0]*/, 192 /*[1]*/, 13650 /*[2]*/, 5760 /*[3]*/, 960 /*[4]*/, 576 /*[5]*/],
		[434 /*[0]*/, 193 /*[1]*/, 13750 /*[2]*/, 5790 /*[3]*/, 965 /*[4]*/, 579 /*[5]*/],
		[435 /*[0]*/, 194 /*[1]*/, 13850 /*[2]*/, 5820 /*[3]*/, 970 /*[4]*/, 582 /*[5]*/],
		[436 /*[0]*/, 195 /*[1]*/, 13950 /*[2]*/, 5850 /*[3]*/, 975 /*[4]*/, 585 /*[5]*/],
		[437 /*[0]*/, 196 /*[1]*/, 14050 /*[2]*/, 5880 /*[3]*/, 980 /*[4]*/, 588 /*[5]*/],
		[438 /*[0]*/, 197 /*[1]*/, 14150 /*[2]*/, 5910 /*[3]*/, 985 /*[4]*/, 591 /*[5]*/],
		[439 /*[0]*/, 198 /*[1]*/, 14250 /*[2]*/, 5940 /*[3]*/, 990 /*[4]*/, 594 /*[5]*/],
		[440 /*[0]*/, 199 /*[1]*/, 14350 /*[2]*/, 5970 /*[3]*/, 995 /*[4]*/, 597 /*[5]*/],
		[441 /*[0]*/, 200 /*[1]*/, 14450 /*[2]*/, 6000 /*[3]*/, 1000 /*[4]*/, 600 /*[5]*/]
	],
};
