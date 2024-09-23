const TopSection = () => {
    const backgroundImage = {
        // backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        // backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='2000' height='500' preserveAspectRatio='none' viewBox='0 0 2000 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1144%26quot%3b)' fill='none'%3e%3crect width='2000' height='500' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M42.22 -42.36L107.17 -4.86L107.17 70.14L42.22 107.64L-22.73 70.14L-22.73 -4.86zM107.17 70.14L172.13 107.64L172.13 182.64L107.17 220.14L42.22 182.64L42.22 107.64zM42.22 182.64L107.17 220.14L107.17 295.14L42.22 332.64L-22.73 295.14L-22.73 220.14zM42.22 407.64L107.17 445.14L107.17 520.14L42.22 557.64L-22.73 520.14L-22.73 445.14zM172.13 182.64L237.08 220.14L237.08 295.14L172.13 332.64L107.17 295.14L107.17 220.14zM172.13 407.64L237.08 445.14L237.08 520.14L172.13 557.64L107.17 520.14L107.17 445.14zM366.99 295.14L431.94 332.64L431.94 407.64L366.99 445.14L302.03 407.64L302.03 332.64zM302.03 407.64L366.99 445.14L366.99 520.14L302.03 557.64L237.08 520.14L237.08 445.14zM626.8 295.14L691.76 332.64L691.76 407.64L626.8 445.14L561.85 407.64L561.85 332.64zM821.66 -42.36L886.62 -4.86L886.62 70.14L821.66 107.64L756.71 70.14L756.71 -4.86zM821.66 182.64L886.62 220.14L886.62 295.14L821.66 332.64L756.71 295.14L756.71 220.14zM821.66 407.64L886.62 445.14L886.62 520.14L821.66 557.64L756.71 520.14L756.71 445.14zM1081.48 -42.36L1146.43 -4.86L1146.43 70.14L1081.48 107.64L1016.53 70.14L1016.53 -4.86zM1211.39 407.64L1276.34 445.14L1276.34 520.14L1211.39 557.64L1146.43 520.14L1146.43 445.14zM1341.3 -42.36L1406.25 -4.86L1406.25 70.14L1341.3 107.64L1276.34 70.14L1276.34 -4.86zM1471.2 -42.36L1536.16 -4.86L1536.16 70.14L1471.2 107.64L1406.25 70.14L1406.25 -4.86zM1471.2 182.64L1536.16 220.14L1536.16 295.14L1471.2 332.64L1406.25 295.14L1406.25 220.14zM1601.11 407.64L1666.06 445.14L1666.06 520.14L1601.11 557.64L1536.16 520.14L1536.16 445.14zM1731.02 407.64L1795.97 445.14L1795.97 520.14L1731.02 557.64L1666.06 520.14L1666.06 445.14zM1925.88 70.14L1990.83 107.64L1990.83 182.64L1925.88 220.14L1860.92 182.64L1860.92 107.64zM1990.83 182.64L2055.79 220.14L2055.79 295.14L1990.83 332.64L1925.88 295.14L1925.88 220.14zM2055.79 295.14L2120.74 332.64L2120.74 407.64L2055.79 445.14L1990.83 407.64L1990.83 332.64z' stroke='rgba(155%2c 159%2c 163%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M34.72 -42.36 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM99.67 -4.86 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM99.67 70.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM34.72 107.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM-30.23 70.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM-30.23 -4.86 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM164.63 107.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM164.63 182.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM99.67 220.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM34.72 182.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM99.67 295.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM34.72 332.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM-30.23 295.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM-30.23 220.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM34.72 407.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM99.67 445.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM99.67 520.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM34.72 557.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM-30.23 520.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM-30.23 445.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM229.58 220.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM229.58 295.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM164.63 332.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM164.63 407.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM229.58 445.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM229.58 520.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM164.63 557.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM359.49 295.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM424.44 332.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM424.44 407.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM359.49 445.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM294.53 407.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM294.53 332.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM359.49 520.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM294.53 557.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM619.3 295.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM684.26 332.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM684.26 407.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM619.3 445.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM554.35 407.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM554.35 332.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM814.16 -42.36 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM879.12 -4.86 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM879.12 70.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM814.16 107.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM749.21 70.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM749.21 -4.86 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM814.16 182.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM879.12 220.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM879.12 295.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM814.16 332.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM749.21 295.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM749.21 220.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM814.16 407.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM879.12 445.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM879.12 520.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM814.16 557.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM749.21 520.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM749.21 445.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1073.98 -42.36 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1138.93 -4.86 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1138.93 70.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1073.98 107.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1009.03 70.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1009.03 -4.86 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1203.89 407.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1268.84 445.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1268.84 520.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1203.89 557.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1138.93 520.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1138.93 445.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1333.8 -42.36 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1398.75 -4.86 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1398.75 70.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1333.8 107.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1268.84 70.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1268.84 -4.86 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1463.7 -42.36 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1528.66 -4.86 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1528.66 70.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1463.7 107.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1463.7 182.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1528.66 220.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1528.66 295.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1463.7 332.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1398.75 295.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1398.75 220.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1593.61 407.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1658.56 445.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1658.56 520.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1593.61 557.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1528.66 520.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1528.66 445.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1723.52 407.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1788.47 445.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1788.47 520.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1723.52 557.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1918.38 70.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1983.33 107.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1983.33 182.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1918.38 220.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1853.42 182.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1853.42 107.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM2048.29 220.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM2048.29 295.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1983.33 332.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1918.38 295.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM2113.24 332.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM2113.24 407.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM2048.29 445.14 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1983.33 407.64 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0z' fill='rgba(155%2c 159%2c 163%2c 1)'%3e%3c/path%3e%3cpath d='M1.21 251.05L41.91 274.55L41.91 321.55L1.21 345.05L-39.49 321.55L-39.49 274.55zM123.32 180.55L164.03 204.05L164.03 251.05L123.32 274.55L82.62 251.05L82.62 204.05zM164.03 110.05L204.73 133.55L204.73 180.55L164.03 204.05L123.32 180.55L123.32 133.55zM164.03 251.05L204.73 274.55L204.73 321.55L164.03 345.05L123.32 321.55L123.32 274.55zM286.14 39.55L326.84 63.05L326.84 110.05L286.14 133.55L245.44 110.05L245.44 63.05zM245.44 392.05L286.14 415.55L286.14 462.55L245.44 486.05L204.73 462.55L204.73 415.55zM326.84 251.05L367.55 274.55L367.55 321.55L326.84 345.05L286.14 321.55L286.14 274.55zM367.55 462.55L408.25 486.05L408.25 533.05L367.55 556.55L326.84 533.05L326.84 486.05zM489.66 -30.95L530.37 -7.45L530.37 39.55L489.66 63.05L448.96 39.55L448.96 -7.45zM530.37 180.55L571.07 204.05L571.07 251.05L530.37 274.55L489.66 251.05L489.66 204.05zM530.37 321.55L571.07 345.05L571.07 392.05L530.37 415.55L489.66 392.05L489.66 345.05zM489.66 392.05L530.37 415.55L530.37 462.55L489.66 486.05L448.96 462.55L448.96 415.55zM693.18 39.55L733.89 63.05L733.89 110.05L693.18 133.55L652.48 110.05L652.48 63.05zM652.48 110.05L693.18 133.55L693.18 180.55L652.48 204.05L611.78 180.55L611.78 133.55zM693.18 180.55L733.89 204.05L733.89 251.05L693.18 274.55L652.48 251.05L652.48 204.05zM774.59 321.55L815.3 345.05L815.3 392.05L774.59 415.55L733.89 392.05L733.89 345.05zM815.3 -30.95L856 -7.45L856 39.55L815.3 63.05L774.59 39.55L774.59 -7.45zM856 321.55L896.71 345.05L896.71 392.05L856 415.55L815.3 392.05L815.3 345.05zM1100.23 462.55L1140.93 486.05L1140.93 533.05L1100.23 556.55L1059.52 533.05L1059.52 486.05zM1181.64 180.55L1222.34 204.05L1222.34 251.05L1181.64 274.55L1140.93 251.05L1140.93 204.05zM1181.64 321.55L1222.34 345.05L1222.34 392.05L1181.64 415.55L1140.93 392.05L1140.93 345.05zM1303.75 -30.95L1344.45 -7.45L1344.45 39.55L1303.75 63.05L1263.04 39.55L1263.04 -7.45zM1344.45 321.55L1385.16 345.05L1385.16 392.05L1344.45 415.55L1303.75 392.05L1303.75 345.05zM1425.86 39.55L1466.57 63.05L1466.57 110.05L1425.86 133.55L1385.16 110.05L1385.16 63.05zM1385.16 110.05L1425.86 133.55L1425.86 180.55L1385.16 204.05L1344.45 180.55L1344.45 133.55zM1425.86 180.55L1466.57 204.05L1466.57 251.05L1425.86 274.55L1385.16 251.05L1385.16 204.05zM1385.16 392.05L1425.86 415.55L1425.86 462.55L1385.16 486.05L1344.45 462.55L1344.45 415.55zM1466.57 -30.95L1507.27 -7.45L1507.27 39.55L1466.57 63.05L1425.86 39.55L1425.86 -7.45zM1629.38 110.05L1670.09 133.55L1670.09 180.55L1629.38 204.05L1588.68 180.55L1588.68 133.55zM1710.79 -30.95L1751.5 -7.45L1751.5 39.55L1710.79 63.05L1670.09 39.55L1670.09 -7.45zM1710.79 251.05L1751.5 274.55L1751.5 321.55L1710.79 345.05L1670.09 321.55L1670.09 274.55zM1995.72 180.55L2036.43 204.05L2036.43 251.05L1995.72 274.55L1955.02 251.05L1955.02 204.05zM1955.02 392.05L1995.72 415.55L1995.72 462.55L1955.02 486.05L1914.31 462.55L1914.31 415.55z' stroke='rgba(185%2c 188%2c 192%2c 0.93)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1144'%3e%3crect width='2000' height='500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M0.05 -59.85L65 -22.35L65 52.65L0.05 90.15L-64.9 52.65L-64.9 -22.35zM0.05 165.15L65 202.65L65 277.65L0.05 315.15L-64.9 277.65L-64.9 202.65zM0.05 390.15L65 427.65L65 502.65L0.05 540.15L-64.9 502.65L-64.9 427.65zM129.96 390.15L194.91 427.65L194.91 502.65L129.96 540.15L65 502.65L65 427.65zM259.87 165.15L324.82 202.65L324.82 277.65L259.87 315.15L194.91 277.65L194.91 202.65zM324.82 277.65L389.77 315.15L389.77 390.15L324.82 427.65L259.87 390.15L259.87 315.15zM259.87 390.15L324.82 427.65L324.82 502.65L259.87 540.15L194.91 502.65L194.91 427.65zM324.82 502.65L389.77 540.15L389.77 615.15L324.82 652.65L259.87 615.15L259.87 540.15zM454.73 52.65L519.68 90.15L519.68 165.15L454.73 202.65L389.77 165.15L389.77 90.15zM389.77 390.15L454.73 427.65L454.73 502.65L389.77 540.15L324.82 502.65L324.82 427.65zM519.68 -59.85L584.63 -22.35L584.63 52.65L519.68 90.15L454.73 52.65L454.73 -22.35zM714.54 52.65L779.5 90.15L779.5 165.15L714.54 202.65L649.59 165.15L649.59 90.15zM714.54 277.65L779.5 315.15L779.5 390.15L714.54 427.65L649.59 390.15L649.59 315.15zM779.49 165.15L844.45 202.65L844.45 277.65L779.49 315.15L714.54 277.65L714.54 202.65zM844.45 277.65L909.4 315.15L909.4 390.15L844.45 427.65L779.49 390.15L779.49 315.15zM909.4 390.15L974.36 427.65L974.36 502.65L909.4 540.15L844.45 502.65L844.45 427.65zM1104.26 277.65L1169.22 315.15L1169.22 390.15L1104.26 427.65L1039.31 390.15L1039.31 315.15zM1039.31 390.15L1104.26 427.65L1104.26 502.65L1039.31 540.15L974.36 502.65L974.36 427.65zM1364.08 277.65L1429.03 315.15L1429.03 390.15L1364.08 427.65L1299.13 390.15L1299.13 315.15zM1493.99 52.65L1558.94 90.15L1558.94 165.15L1493.99 202.65L1429.03 165.15L1429.03 90.15zM1493.99 277.65L1558.94 315.15L1558.94 390.15L1493.99 427.65L1429.03 390.15L1429.03 315.15z' stroke='%2303305d' stroke-width='2'%3e%3c/path%3e%3cpath d='M-7.45 -59.85 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM57.5 -22.35 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM57.5 52.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM-7.45 90.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM-72.4 52.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM-72.4 -22.35 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM-7.45 165.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM57.5 202.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM57.5 277.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM-7.45 315.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM-72.4 277.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM-72.4 202.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM-7.45 390.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM57.5 427.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM57.5 502.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM-7.45 540.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM-72.4 502.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM-72.4 427.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM122.46 390.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM187.41 427.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM187.41 502.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM122.46 540.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM252.37 165.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM317.32 202.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM317.32 277.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM252.37 315.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM187.41 277.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM187.41 202.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM382.27 315.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM382.27 390.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM317.32 427.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM252.37 390.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM317.32 502.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM252.37 540.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM382.27 540.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM382.27 615.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM317.32 652.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM252.37 615.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM447.23 52.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM512.18 90.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM512.18 165.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM447.23 202.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM382.27 165.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM382.27 90.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM447.23 427.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM447.23 502.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM512.18 -59.85 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM577.13 -22.35 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM577.13 52.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM447.23 -22.35 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM707.04 52.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM772 90.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM772 165.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM707.04 202.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM642.09 165.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM642.09 90.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM707.04 277.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM772 315.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM772 390.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM707.04 427.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM642.09 390.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM642.09 315.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM771.99 165.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM836.95 202.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM836.95 277.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM771.99 315.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM901.9 315.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM901.9 390.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM836.95 427.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM771.99 390.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM966.86 427.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM966.86 502.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM901.9 540.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM836.95 502.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1096.76 277.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1161.72 315.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1161.72 390.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1096.76 427.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1031.81 390.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1031.81 315.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1096.76 502.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1031.81 540.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1356.58 277.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1421.53 315.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1421.53 390.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1356.58 427.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1291.63 390.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1291.63 315.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1486.49 52.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1551.44 90.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1551.44 165.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1486.49 202.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1421.53 165.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1421.53 90.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1486.49 277.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1551.44 315.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1551.44 390.15 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1486.49 427.65 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0z' fill='%2303305d'%3e%3c/path%3e%3cpath d='M73.16 191.26L116.47 216.26L116.47 266.26L73.16 291.26L29.86 266.26L29.86 216.26zM73.16 341.26L116.47 366.26L116.47 416.26L73.16 441.26L29.86 416.26L29.86 366.26zM29.86 416.26L73.16 441.26L73.16 491.26L29.86 516.26L-13.44 491.26L-13.44 441.26zM159.77 41.26L203.07 66.26L203.07 116.26L159.77 141.26L116.47 116.26L116.47 66.26zM159.77 491.26L203.07 516.26L203.07 566.26L159.77 591.26L116.47 566.26L116.47 516.26zM246.37 191.26L289.68 216.26L289.68 266.26L246.37 291.26L203.07 266.26L203.07 216.26zM246.37 341.26L289.68 366.26L289.68 416.26L246.37 441.26L203.07 416.26L203.07 366.26zM246.37 491.26L289.68 516.26L289.68 566.26L246.37 591.26L203.07 566.26L203.07 516.26zM332.98 191.26L376.28 216.26L376.28 266.26L332.98 291.26L289.68 266.26L289.68 216.26zM289.68 266.26L332.98 291.26L332.98 341.26L289.68 366.26L246.37 341.26L246.37 291.26zM419.58 41.26L462.89 66.26L462.89 116.26L419.58 141.26L376.28 116.26L376.28 66.26zM376.28 266.26L419.58 291.26L419.58 341.26L376.28 366.26L332.98 341.26L332.98 291.26zM419.58 341.26L462.89 366.26L462.89 416.26L419.58 441.26L376.28 416.26L376.28 366.26zM419.58 491.26L462.89 516.26L462.89 566.26L419.58 591.26L376.28 566.26L376.28 516.26zM506.19 491.26L549.49 516.26L549.49 566.26L506.19 591.26L462.89 566.26L462.89 516.26zM592.79 41.26L636.1 66.26L636.1 116.26L592.79 141.26L549.49 116.26L549.49 66.26zM592.79 341.26L636.1 366.26L636.1 416.26L592.79 441.26L549.49 416.26L549.49 366.26zM549.49 416.26L592.79 441.26L592.79 491.26L549.49 516.26L506.19 491.26L506.19 441.26zM592.79 491.26L636.1 516.26L636.1 566.26L592.79 591.26L549.49 566.26L549.49 516.26zM636.1 -33.74L679.4 -8.74L679.4 41.26L636.1 66.26L592.79 41.26L592.79 -8.74zM679.4 41.26L722.7 66.26L722.7 116.26L679.4 141.26L636.1 116.26L636.1 66.26zM636.1 116.26L679.4 141.26L679.4 191.26L636.1 216.26L592.79 191.26L592.79 141.26zM679.4 191.26L722.7 216.26L722.7 266.26L679.4 291.26L636.1 266.26L636.1 216.26zM766 41.26L809.31 66.26L809.31 116.26L766 141.26L722.7 116.26L722.7 66.26zM722.7 116.26L766 141.26L766 191.26L722.7 216.26L679.4 191.26L679.4 141.26zM722.7 266.26L766 291.26L766 341.26L722.7 366.26L679.4 341.26L679.4 291.26zM809.31 266.26L852.61 291.26L852.61 341.26L809.31 366.26L766 341.26L766 291.26zM895.91 116.26L939.21 141.26L939.21 191.26L895.91 216.26L852.61 191.26L852.61 141.26zM939.21 191.26L982.52 216.26L982.52 266.26L939.21 291.26L895.91 266.26L895.91 216.26zM895.91 266.26L939.21 291.26L939.21 341.26L895.91 366.26L852.61 341.26L852.61 291.26zM939.21 341.26L982.52 366.26L982.52 416.26L939.21 441.26L895.91 416.26L895.91 366.26zM982.52 116.26L1025.82 141.26L1025.82 191.26L982.52 216.26L939.21 191.26L939.21 141.26zM1069.12 116.26L1112.42 141.26L1112.42 191.26L1069.12 216.26L1025.82 191.26L1025.82 141.26zM1199.03 41.26L1242.33 66.26L1242.33 116.26L1199.03 141.26L1155.72 116.26L1155.72 66.26zM1199.03 191.26L1242.33 216.26L1242.33 266.26L1199.03 291.26L1155.72 266.26L1155.72 216.26zM1155.72 416.26L1199.03 441.26L1199.03 491.26L1155.72 516.26L1112.42 491.26L1112.42 441.26zM1242.33 -33.74L1285.63 -8.74L1285.63 41.26L1242.33 66.26L1199.03 41.26L1199.03 -8.74zM1242.33 266.26L1285.63 291.26L1285.63 341.26L1242.33 366.26L1199.03 341.26L1199.03 291.26zM1242.33 416.26L1285.63 441.26L1285.63 491.26L1242.33 516.26L1199.03 491.26L1199.03 441.26zM1285.63 491.26L1328.93 516.26L1328.93 566.26L1285.63 591.26L1242.33 566.26L1242.33 516.26zM1372.24 41.26L1415.54 66.26L1415.54 116.26L1372.24 141.26L1328.93 116.26L1328.93 66.26zM1372.24 341.26L1415.54 366.26L1415.54 416.26L1372.24 441.26L1328.93 416.26L1328.93 366.26zM1415.54 -33.74L1458.84 -8.74L1458.84 41.26L1415.54 66.26L1372.24 41.26L1372.24 -8.74zM1415.54 116.26L1458.84 141.26L1458.84 191.26L1415.54 216.26L1372.24 191.26L1372.24 141.26zM1415.54 266.26L1458.84 291.26L1458.84 341.26L1415.54 366.26L1372.24 341.26L1372.24 291.26zM1458.84 341.26L1502.14 366.26L1502.14 416.26L1458.84 441.26L1415.54 416.26L1415.54 366.26z' stroke='rgba(6%2c 80%2c 156%2c 0.93)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`
    };

    return (
        <div
            className="relative py-24 overflow-hidden bg-fixed bg-cover bg-center"
            style={backgroundImage}
        >
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl leading-tight">
                    Welcome to Chester Cards
                </h1>
                <p className="mt-4 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
                    Experience Chester through beautifully designed playing cards that capture the city’s landmarks.
                </p>
            </div>
        </div>
    );
};

export default TopSection;
