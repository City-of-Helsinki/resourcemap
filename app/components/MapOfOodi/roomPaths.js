import React from 'react';

// It's not possible to declare a stroke that is inside an svg element.
// The hack used in the source image is to have two element: one that is
// the shape and one that is the shape's border.
const makeDashedRoom = (Room, DashedBorder) => props => {
  // A dashed room should never have a stroke, because the stroke we
  // want to use is declared with a separate element.
  const roomStyles = {
    stroke: 'transparent',
  };
  // The dash border should always have the color of the room border as
  // its fill, and it should never have a stroke, lest we duplicate the
  // stroke size.
  const dashBorderStyles = {
    stroke: 'transparent',
    fill: '#f6f6f8',
  };

  // We are using the style object, because fills and strokes that are
  // defined in CSS take precedence over direct svg attributes.
  return (
    <>
      <Room {...props} style={roomStyles} />
      <DashedBorder {...props} style={dashBorderStyles} />
    </>
  );
};

export default {
  o1: [
    props => (
      <rect {...props} x="396.424" y="200.536" width="48.69" height="63.425" />
    ),
  ],
  o2: [
    'M334.752,263.966L334.752,187.295L392.12,184.6L392.12,263.966L334.752,263.966Z',
  ],
  // Group spaces
  av5k4vxjxyha: [
    props => (
      <rect
        {...props}
        x="478.34"
        y="5.445"
        width="25.248"
        height="47.796"
        stroke="red"
        strokeWidth="2px"
      />
    ),
  ],
  av5k5ip53e2q: [
    props => (
      <rect {...props} x="507.589" y="5.445" width="25.248" height="47.796" />
    ),
  ],
  av5k5ksofidq: [
    props => (
      <rect {...props} x="565.995" y="5.445" width="64.702" height="47.796" />
    ),
  ],
  av5k5mveypsa: [
    props => (
      <rect {...props} x="283.151" y="235.039" width="47.417" height="62.152" />
    ),
  ],
  av5k57wpbdza: [
    props => (
      <rect {...props} x="253.067" y="234.924" width="26.011" height="47.68" />
    ),
  ],
  av5k6ayouzga: [
    props => (
      <rect {...props} x="222.986" y="234.924" width="26.011" height="47.68" />
    ),
  ],
  av5k6dfiu3va: [
    props => (
      <rect {...props} x="171.035" y="235.039" width="47.763" height="57.523" />
    ),
  ],
  av5k6eqxl4za: [
    props => (
      <rect {...props} x="114.92" y="234.924" width="52.043" height="40.966" />
    ),
  ],
  av5k6g75os4q: [
    props => (
      <rect {...props} x="81.829" y="147.857" width="34.69" height="34.483" />
    ),
  ],
  av5k6h56ne7q: [
    props => (
      <rect {...props} x="81.829" y="109.303" width="34.69" height="34.483" />
    ),
  ],
  // Studios
  s1: [
    'M277.046,144.8L277.046,111.384L314.913,111.384L310.737,148.064L277.046,144.8Z',
  ],
  s2: [
    'M218.878,111.384L272.166,111.384L272.166,144.753L218.878,147.053L218.878,111.384Z',
  ],
  s3: [
    'M146.853,141.183L149.092,111.384L213.592,111.384L213.592,144.657L146.853,141.183Z',
  ],
  s4: [
    'M146.929,145.206L213.592,148.733L213.592,172.609L151.025,176.087L146.929,145.206Z',
  ],
  s5: [
    'M148.456,211.633L151.081,180.103L213.592,176.628L213.592,211.633L148.456,211.633Z',
  ],
  s6: [
    'M219.117,211.633L219.117,189.169L236.382,189.169L249.062,199.804L249.062,211.633L219.117,211.633Z',
    'M238.227,184.553L219.117,184.553L219.117,151.992L261.407,150.245L261.407,185.285L251.261,195.291L238.227,184.553Z',
    'M273.566,211.633L277.229,195.474L267.301,185.568L267.301,150.257L311.02,152.693L311.02,211.633L273.566,211.633Z',
  ],
  // Game rooms
  p1: [
    'M334.752,140.793L368.054,140.793L368.054,165.118L334.752,166.245L334.752,140.793Z',
  ],
  p2: [
    'M372.934,140.793L406.236,140.793L406.236,163.924L372.934,165.051L372.934,140.793Z',
  ],
  p3: [
    'M411.116,140.793L444.418,140.793L444.418,162.332L411.116,163.459L411.116,140.793Z',
  ],
  p4: [
    makeDashedRoom(
      props => (
        <rect
          {...props}
          x="510.52"
          y="197.102"
          width="56.911"
          height="43.354"
        />
      ),
      props => (
        <path
          {...props}
          d="M556.295,197.102L550.727,197.102L550.727,199.092L556.295,199.092L556.295,197.102ZM545.158,197.102L539.59,197.102L539.59,199.092L545.158,199.092L545.158,197.102ZM534.022,197.102L528.454,197.102L528.454,199.092L534.022,199.092L534.022,197.102ZM522.886,197.102L517.317,197.102L517.317,199.092L522.886,199.092L522.886,197.102ZM512.509,197.102L510.52,197.102L510.52,201.444L512.509,201.444L512.509,197.102ZM512.509,207.016L510.52,207.016L510.52,212.588L512.509,212.588L512.509,207.016ZM512.509,218.16L510.52,218.16L510.52,223.732L512.509,223.732L512.509,218.16ZM512.509,229.304L510.52,229.304L510.52,234.876L512.509,234.876L512.509,229.304ZM516.088,238.458L510.52,238.458L510.52,240.448L516.088,240.448L516.088,238.458ZM527.225,238.458L521.657,238.458L521.657,240.448L527.225,240.448L527.225,238.458ZM538.361,238.458L532.793,238.458L532.793,240.448L538.361,240.448L538.361,238.458ZM549.498,238.458L543.929,238.458L543.929,240.448L549.498,240.448L549.498,238.458ZM560.634,238.458L555.066,238.458L555.066,240.448L560.634,240.448L560.634,238.458ZM567.443,236.114L565.454,236.114L565.454,240.448L567.443,240.448L567.443,236.114ZM567.443,224.97L565.454,224.97L565.454,230.542L567.443,230.542L567.443,224.97ZM567.443,213.826L565.454,213.826L565.454,219.398L567.443,219.398L567.443,213.826ZM567.443,202.682L565.454,202.682L565.454,208.254L567.443,208.254L567.443,202.682ZM567.443,197.11L561.875,197.11L561.875,199.1L567.443,199.1L567.443,197.11Z"
        />
      ),
    ),
  ],
  p5: [
    'M449.604,297.282L449.604,181.978L496.6,179.307L496.6,297.282L449.604,297.282Z',
  ],
  // Other spaces
  k: [
    props => (
      <rect {...props} x="536.838" y="5.445" width="25.248" height="47.796" />
    ),
  ],
  kuutio: [
    props => (
      <rect {...props} x="1136.34" y="94.827" width="95.435" height="83.11" />
    ),
  ],
  lukusali: [
    'M1114.94,76.165L1114.94,5.56L1199.15,5.56L1246.07,76.165L1114.94,76.165Z',
  ],
  av5k7ixqvzha: [
    props => (
      <rect {...props} x="68.521" y="221.61" width="42.442" height="54.164" />
    ),
  ],
  workingArea: [
    makeDashedRoom(
      props => (
        <path
          {...props}
          d="M1237.02,93.677L1258.73,93.677L1297.93,153.855L1237.02,192.15L1237.02,93.677Z"
        />
      ),
      props => (
        <path
          {...props}
          d="M1258.73,93.677L1253.16,93.677L1253.16,95.667L1258.73,95.667L1258.73,93.677ZM1247.59,93.677L1242.03,93.677L1242.03,95.667L1247.59,95.667L1247.59,93.677ZM1239,94.234L1237.02,94.234L1237.02,99.806L1239,99.806L1239,94.234ZM1239,105.378L1237.02,105.378L1237.02,110.95L1239,110.95L1239,105.378ZM1239,116.522L1237.02,116.522L1237.02,122.094L1239,122.094L1239,116.522ZM1239,127.666L1237.02,127.666L1237.02,133.238L1239,133.238L1239,127.666ZM1239,138.81L1237.02,138.81L1237.02,144.382L1239,144.382L1239,138.81ZM1239,149.954L1237.02,149.954L1237.02,155.526L1239,155.526L1239,149.954ZM1239,161.098L1237.02,161.098L1237.02,166.67L1239,166.67L1239,161.098ZM1239,172.242L1237.02,172.242L1237.02,177.814L1239,177.814L1239,172.242ZM1239,183.386L1237.02,183.386L1237.02,188.958L1238.36,188.958L1237.96,189.197L1239.02,190.885L1243.73,187.92L1242.67,186.236L1238.99,188.549L1238.99,183.375L1239,183.386ZM1252.13,180.306L1247.41,183.271L1248.47,184.955L1253.19,181.993L1252.13,180.306ZM1261.56,174.38L1256.82,177.341L1257.88,179.028L1259.07,178.276L1262.58,176.071L1261.52,174.388L1261.56,174.38ZM1270.99,168.45L1266.28,171.415L1267.33,173.098L1272.05,170.137L1270.99,168.45ZM1280.42,162.523L1275.71,165.488L1276.76,167.172L1281.48,164.207L1280.42,162.523ZM1289.85,156.593L1285.14,159.558L1286.19,161.242L1290.91,158.281L1289.85,156.593ZM1296.4,151.487L1294.74,152.573L1295.17,153.246L1294.57,153.644L1295.62,155.327L1296.26,154.929L1297.95,153.871L1296.4,151.483L1296.4,151.487ZM1290.32,142.15L1288.64,143.24L1291.68,147.905L1293.35,146.818L1291.42,143.865L1291.42,143.841L1291.39,143.801L1290.36,142.209L1290.32,142.15ZM1284.24,132.817L1282.58,133.903L1285.61,138.572L1287.28,137.485L1284.24,132.817ZM1278.16,123.48L1276.49,124.566L1279.53,129.235L1281.2,128.148L1279.02,124.805L1279.02,124.781L1279,124.753L1278.21,123.519L1278.16,123.48ZM1272.08,114.146L1270.41,115.233L1273.45,119.898L1275.12,118.811L1272.08,114.146ZM1265.97,104.809L1264.31,105.896L1267.35,110.564L1269.01,109.478L1266.57,105.729L1266,104.853L1265.97,104.809ZM1259.89,95.472L1258.22,96.559L1261.26,101.227L1262.93,100.141L1260.18,95.922L1260.18,95.898L1260.16,95.866L1259.93,95.516L1259.89,95.472Z"
        />
      ),
    ),
  ],
  // Working spaces
  wsp1: [
    props => (
      <rect {...props} x="1017.98" y="51.41" width="20.224" height="24.871" />
    ),
  ],
  wsp2: [
    props => (
      <rect {...props} x="1042.16" y="51.41" width="20.224" height="24.871" />
    ),
  ],
  wsp3: [
    props => (
      <rect {...props} x="1066.34" y="51.41" width="20.224" height="24.871" />
    ),
  ],
  wsp4: [
    props => (
      <rect {...props} x="1090.52" y="51.41" width="20.224" height="24.871" />
    ),
  ],
  wsp5: [
    props => (
      <rect {...props} x="1188.99" y="181.898" width="19.302" height="41.774" />
    ),
  ],
  wsp6: [
    props => (
      <rect {...props} x="1212.48" y="181.898" width="19.302" height="41.774" />
    ),
  ],
  wst1: [
    makeDashedRoom(
      props => (
        <rect
          {...props}
          x="494.372"
          y="61.722"
          width="68.906"
          height="43.354"
        />
      ),
      props => (
        <path
          {...props}
          d="M552.142,61.722L546.574,61.722L546.574,63.712L552.142,63.712L552.142,61.722ZM541.006,61.722L535.438,61.722L535.438,63.712L541.006,63.712L541.006,61.722ZM529.87,61.722L524.301,61.722L524.301,63.712L529.87,63.712L529.87,61.722ZM518.733,61.722L513.165,61.722L513.165,63.712L518.733,63.712L518.733,61.722ZM507.597,61.722L502.029,61.722L502.029,63.712L507.597,63.712L507.597,61.722ZM496.464,61.722L494.376,61.722L494.376,65.204L496.365,65.204L496.365,63.712L496.464,63.712L496.464,61.722ZM496.361,70.776L494.372,70.776L494.372,76.348L496.361,76.348L496.361,70.776ZM496.361,81.92L494.372,81.92L494.372,87.492L496.361,87.492L496.361,81.92ZM496.361,93.064L494.372,93.064L494.372,98.636L496.361,98.636L496.361,93.064ZM499.074,103.09L494.376,103.09L494.376,105.072L499.078,105.072L499.078,103.082L499.074,103.09ZM510.21,103.09L504.642,103.09L504.642,105.08L510.21,105.08L510.21,103.09ZM521.346,103.09L515.778,103.09L515.778,105.08L521.346,105.08L521.346,103.09ZM532.483,103.09L526.915,103.09L526.915,105.08L532.483,105.08L532.483,103.09ZM543.619,103.09L538.051,103.09L538.051,105.08L543.619,105.08L543.619,103.09ZM554.756,103.09L549.187,103.09L549.187,105.08L554.756,105.08L554.756,103.09ZM563.279,102.465L561.29,102.465L561.29,103.082L560.324,103.082L560.324,105.072L563.279,105.072L563.279,102.457L563.279,102.465ZM563.279,91.321L561.29,91.321L561.29,96.893L563.279,96.893L563.279,91.321ZM563.279,80.177L561.29,80.177L561.29,85.749L563.279,85.749L563.279,80.177ZM563.279,69.033L561.29,69.033L561.29,74.605L563.279,74.605L563.279,69.033ZM563.279,61.722L557.711,61.722L557.711,63.712L563.279,63.712L563.279,61.722Z"
        />
      ),
    ),
  ],
  wst2: [
    makeDashedRoom(
      props => (
        <rect
          {...props}
          x="569.531"
          y="61.216"
          width="111.336"
          height="43.354"
        />
      ),
      props => (
        <path
          {...props}
          d="M680.867,61.216L675.299,61.216L675.299,63.206L680.867,63.206L680.867,61.216ZM669.731,61.216L664.163,61.216L664.163,63.206L669.731,63.206L669.731,61.216ZM658.594,61.216L653.026,61.216L653.026,63.206L658.594,63.206L658.594,61.216ZM647.458,61.216L641.89,61.216L641.89,63.206L647.458,63.206L647.458,61.216ZM636.322,61.216L630.753,61.216L630.753,63.206L636.322,63.206L636.322,61.216ZM625.185,61.216L619.617,61.216L619.617,63.206L625.185,63.206L625.185,61.216ZM614.049,61.216L608.481,61.216L608.481,63.206L614.049,63.206L614.049,61.216ZM602.913,61.216L597.344,61.216L597.344,63.206L602.913,63.206L602.913,61.216ZM591.776,61.216L586.208,61.216L586.208,63.206L591.776,63.206L591.776,61.216ZM580.64,61.216L575.072,61.216L575.072,63.206L580.64,63.206L580.64,61.216ZM571.52,61.24L569.531,61.24L569.531,66.812L571.52,66.812L571.52,61.24ZM571.52,72.384L569.531,72.384L569.531,77.956L571.52,77.956L571.52,72.384ZM571.52,83.528L569.531,83.528L569.531,89.1L571.52,89.1L571.52,83.528ZM571.52,94.672L569.531,94.672L569.531,100.244L571.52,100.244L571.52,94.672ZM576.344,102.581L570.776,102.581L570.776,104.571L576.344,104.571L576.344,102.581ZM587.481,102.581L581.912,102.581L581.912,104.571L587.481,104.571L587.481,102.581ZM598.617,102.581L593.049,102.581L593.049,104.571L598.617,104.571L598.617,102.581ZM609.753,102.581L604.185,102.581L604.185,104.571L609.753,104.571L609.753,102.581ZM620.89,102.581L615.322,102.581L615.322,104.571L620.89,104.571L620.89,102.581ZM632.026,102.581L626.458,102.581L626.458,104.571L632.026,104.571L632.026,102.581ZM643.163,102.581L637.594,102.581L637.594,104.571L643.163,104.571L643.163,102.581ZM654.299,102.581L648.731,102.581L648.731,104.571L654.299,104.571L654.299,102.581ZM665.435,102.581L659.867,102.581L659.867,104.571L665.435,104.571L665.435,102.581ZM676.572,102.581L671.004,102.581L671.004,104.571L676.572,104.571L676.572,102.581ZM680.867,97.725L678.879,97.725L678.879,103.297L680.867,103.297L680.867,97.725ZM680.867,86.581L678.879,86.581L678.879,92.153L680.867,92.153L680.867,86.581ZM680.867,75.437L678.879,75.437L678.879,81.009L680.867,81.009L680.867,75.437ZM680.867,64.293L678.879,64.293L678.879,69.865L680.867,69.865L680.867,64.293Z"
        />
      ),
    ),
  ],
  mr1: [
    'M755.219,52.663L755.219,29.376L812.161,29.376L812.161,5.098L889.297,5.098L889.297,52.663L755.219,52.663Z',
  ],
  uw1: [
    makeDashedRoom(
      props => (
        <rect
          {...props}
          x="832.227"
          y="61.216"
          width="60.009"
          height="20.811"
        />
      ),
      props => (
        <path
          {...props}
          d="M892.236,61.216L886.668,61.216L886.668,63.206L890.247,63.206L890.247,66.916L892.236,66.916L892.236,61.216ZM881.1,61.216L875.531,61.216L875.531,63.206L881.1,63.206L881.1,61.216ZM869.963,61.216L864.395,61.216L864.395,63.206L869.963,63.206L869.963,61.216ZM858.827,61.216L853.259,61.216L853.259,63.206L858.827,63.206L858.827,61.216ZM847.69,61.216L842.122,61.216L842.122,63.206L847.69,63.206L847.69,61.216ZM836.554,61.216L832.227,61.216L832.227,63.206L836.554,63.206L836.554,61.216ZM834.215,68.03L832.227,68.03L832.227,73.602L834.215,73.602L834.215,68.03ZM834.215,79.174L832.227,79.174L832.227,82.024L834.947,82.024L834.947,80.034L834.215,80.034L834.215,79.174ZM846.084,80.034L840.515,80.034L840.515,82.024L846.084,82.024L846.084,80.034ZM857.22,80.034L851.652,80.034L851.652,82.024L857.22,82.024L857.22,80.034ZM868.356,80.034L862.788,80.034L862.788,82.024L868.356,82.024L868.356,80.034ZM879.493,80.034L873.925,80.034L873.925,82.024L879.493,82.024L879.493,80.034ZM890.629,80.034L885.061,80.034L885.061,82.024L890.629,82.024L890.629,80.034ZM892.22,72.472L890.232,72.472L890.232,78.044L892.22,78.044L892.22,72.472Z"
        />
      ),
    ),
  ],
  uw2: [
    makeDashedRoom(
      props => (
        <rect
          {...props}
          x="691.542"
          y="61.216"
          width="120.794"
          height="40.608"
        />
      ),
      props => (
        <path
          {...props}
          d="M812.336,61.216L806.768,61.216L806.768,63.206L812.336,63.206L812.336,61.216ZM801.2,61.216L795.632,61.216L795.632,63.206L801.2,63.206L801.2,61.216ZM790.064,61.216L784.495,61.216L784.495,63.206L790.064,63.206L790.064,61.216ZM778.927,61.216L773.359,61.216L773.359,63.206L778.927,63.206L778.927,61.216ZM767.791,61.216L762.223,61.216L762.223,63.206L767.791,63.206L767.791,61.216ZM756.654,61.216L751.086,61.216L751.086,63.206L756.654,63.206L756.654,61.216ZM745.518,61.216L739.95,61.216L739.95,63.206L745.518,63.206L745.518,61.216ZM734.382,61.216L728.813,61.216L728.813,63.206L734.382,63.206L734.382,61.216ZM723.245,61.216L717.677,61.216L717.677,63.206L723.245,63.206L723.245,61.216ZM712.109,61.216L706.541,61.216L706.541,63.206L712.109,63.206L712.109,61.216ZM700.972,61.216L695.404,61.216L695.404,63.206L700.972,63.206L700.972,61.216ZM693.531,62.924L691.542,62.924L691.542,68.496L693.531,68.496L693.531,62.924ZM693.531,74.068L691.542,74.068L691.542,79.64L693.531,79.64L693.531,74.068ZM693.531,85.212L691.542,85.212L691.542,90.784L693.531,90.784L693.531,85.212ZM693.531,96.356L691.542,96.356L691.542,101.824L693.531,101.824L693.531,96.356ZM702.782,99.834L697.214,99.834L697.214,101.824L702.782,101.824L702.782,99.834ZM713.919,99.834L708.35,99.834L708.35,101.824L713.919,101.824L713.919,99.834ZM725.055,99.834L719.487,99.834L719.487,101.824L725.055,101.824L725.055,99.834ZM736.191,99.834L730.623,99.834L730.623,101.824L736.191,101.824L736.191,99.834ZM747.328,99.834L741.759,99.834L741.759,101.824L747.328,101.824L747.328,99.834ZM758.464,99.834L752.896,99.834L752.896,101.824L758.464,101.824L758.464,99.834ZM769.6,99.834L764.032,99.834L764.032,101.824L769.6,101.824L769.6,99.834ZM780.737,99.834L775.169,99.834L775.169,101.824L780.737,101.824L780.737,99.834ZM791.873,99.834L786.305,99.834L786.305,101.824L791.873,101.824L791.873,99.834ZM803.01,99.834L797.441,99.834L797.441,101.824L803.01,101.824L803.01,99.834ZM812.34,99.834L808.582,99.834L808.582,101.824L812.34,101.824L812.34,99.834ZM812.336,88.869L810.348,88.869L810.348,94.441L812.336,94.441L812.336,88.869ZM812.336,77.725L810.348,77.725L810.348,83.297L812.336,83.297L812.336,77.725ZM812.336,66.581L810.348,66.581L810.348,72.153L812.336,72.153L812.336,66.581Z"
        />
      ),
    ),
  ],
  uw3: [
    makeDashedRoom(
      props => (
        <rect
          {...props}
          x="551.438"
          y="130.843"
          width="129.409"
          height="20.811"
        />
      ),
      props => (
        <path
          {...props}
          d="M680.847,130.843L675.279,130.843L675.279,132.833L680.847,132.833L680.847,130.843ZM669.711,130.843L664.143,130.843L664.143,132.833L669.711,132.833L669.711,130.843ZM658.575,130.843L653.006,130.843L653.006,132.833L658.575,132.833L658.575,130.843ZM647.438,130.843L641.87,130.843L641.87,132.833L647.438,132.833L647.438,130.843ZM636.302,130.843L630.734,130.843L630.734,132.833L636.302,132.833L636.302,130.843ZM625.165,130.843L619.597,130.843L619.597,132.833L625.165,132.833L625.165,130.843ZM614.029,130.843L608.461,130.843L608.461,132.833L614.029,132.833L614.029,130.843ZM602.893,130.843L597.324,130.843L597.324,132.833L602.893,132.833L602.893,130.843ZM591.756,130.843L586.188,130.843L586.188,132.833L591.756,132.833L591.756,130.843ZM580.62,130.843L575.052,130.843L575.052,132.833L580.62,132.833L580.62,130.843ZM569.483,130.843L563.915,130.843L563.915,132.833L569.483,132.833L569.483,130.843ZM558.347,130.843L552.779,130.843L552.779,132.833L558.347,132.833L558.347,130.843ZM553.427,135.073L551.438,135.073L551.438,140.645L553.427,140.645L553.427,135.073ZM553.427,146.217L551.438,146.217L551.438,151.638L553.427,151.638L553.427,146.217ZM562.714,149.66L557.146,149.66L557.146,151.65L562.714,151.65L562.714,149.66ZM573.85,149.66L568.282,149.66L568.282,151.65L573.85,151.65L573.85,149.66ZM584.987,149.66L579.419,149.66L579.419,151.65L584.987,151.65L584.987,149.66ZM596.123,149.66L590.555,149.66L590.555,151.65L596.123,151.65L596.123,149.66ZM607.26,149.66L601.691,149.66L601.691,151.65L607.26,151.65L607.26,149.66ZM618.396,149.66L612.828,149.66L612.828,151.65L618.396,151.65L618.396,149.66ZM629.532,149.66L623.964,149.66L623.964,151.65L629.532,151.65L629.532,149.66ZM640.669,149.66L635.101,149.66L635.101,151.65L640.669,151.65L640.669,149.66ZM651.805,149.66L646.237,149.66L646.237,151.65L651.805,151.65L651.805,149.66ZM662.942,149.66L657.373,149.66L657.373,151.65L662.942,151.65L662.942,149.66ZM674.078,149.66L668.51,149.66L668.51,151.65L674.078,151.65L674.078,149.66ZM680.839,147.272L678.851,147.272L678.851,151.65L680.839,151.65L680.839,147.272ZM680.839,136.128L678.851,136.128L678.851,141.7L680.839,141.7L680.839,136.128Z"
        />
      ),
    ),
  ],
};
