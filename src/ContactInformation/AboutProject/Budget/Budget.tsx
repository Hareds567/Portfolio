import React from "react";
//Styles
import "./Budget.css";

const Budget = () => {
  const [slider_one_value, set_slider_one_value] = React.useState<number>(375);
  const [slider_two_value, set_slider_two_value] = React.useState<number>(1125);

  const [value1, set_value1] = React.useState("375");
  const [value2, set_value2] = React.useState("1125");

  const middle = React.useRef<HTMLDivElement>(null);
  const slider1 = React.useRef<HTMLInputElement>(null);

  const gap = 0;

  React.useEffect(() => {
    fillColor();
  }, [slider_one_value, slider_two_value]);

  const fillColor = () => {
    if (slider1.current && middle.current) {
      const slider_maxVal = parseInt(slider1.current.max);
      const percent1 = (slider_one_value / slider_maxVal) * 100;
      const percent2 = (slider_two_value / slider_maxVal) * 100;

      middle.current.style.background = `linear-gradient(to right, #FFFFFF ${percent1}% , #3BB4CF ${percent1}% , #3BB4CF ${percent2}%, #FFFFFF ${percent2}%)`;
    }
  };

  const isNumber = (value: string) => {
    return /^-?\d+$/.test(value) || value === "";
  };
  // ================================================================
  const onChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(e.target.value)) {
      return;
    }
    let temp: number = parseInt(e.target.value);
    if (!temp) {
      set_value1("");
      return;
    }
    set_value1(temp.toString());
  };

  const onChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(e.target.value)) {
      return;
    }
    let temp: number = parseInt(e.target.value);
    if (!temp) {
      set_value2("");
      return;
    }
    set_value2(temp.toString());
  };
  //  ================================================================
  const onBlur1 = (e: React.FocusEvent<HTMLInputElement>) => {
    let temp: number = parseInt(e.target.value);
    if (temp < 50) {
      set_slider_one_value(50);
      set_value1("50");
      return;
    }
    if (temp > slider_two_value) {
      set_slider_one_value(slider_two_value);
      set_value1(slider_two_value.toString());
      return;
    }
    set_slider_one_value(temp);
    set_value1(temp.toString());
  };

  const onBlur2 = (e: React.FocusEvent<HTMLInputElement>) => {
    let temp: number = parseInt(e.target.value);
    if (temp > 1500) {
      set_slider_two_value(1500);
      set_value2("1500");
      return;
    }
    if (temp < slider_one_value) {
      set_slider_two_value(slider_one_value);
      set_value2(slider_one_value.toString());
      return;
    }
    set_slider_two_value(temp);
    set_value2(temp.toString());
  };
  //  ================================================================
  const onChange1_slider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temp = parseInt(e.target.value);
    if (slider_two_value - temp <= gap) {
      set_slider_one_value(slider_two_value - gap);
      set_value1((slider_two_value - gap).toString());
    } else {
      set_slider_one_value(temp);
      set_value1(temp.toString());
    }
  };
  const onChange2_slider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temp = parseInt(e.target.value);
    if (temp - slider_one_value <= gap) {
      set_slider_two_value(slider_one_value - gap);
      set_value2((slider_one_value - gap).toString());
    } else {
      set_slider_two_value(temp);
      set_value2(temp.toString());
    }
  };
  //  ================================================================

  return (
    <div className="budget-container">
      <div className="project-header">
        <h4 className="project-tittle">Budget</h4>
        <div className="display-range">
          <input
            type="text"
            value={value1}
            onChange={(e) => {
              onChange1(e);
            }}
            onBlur={(e) => {
              onBlur1(e);
            }}
          />
          <p>-</p>
          <input
            type="text"
            value={value2}
            onChange={(e) => {
              onChange2(e);
            }}
            onBlur={(e) => {
              onBlur2(e);
            }}
          />
        </div>
      </div>
      <div className="budget-wrapper">
        <div className="slider-track " ref={middle}></div>
        <input
          ref={slider1}
          type="range"
          min="50"
          max="1500"
          value={slider_one_value}
          onChange={(e) => {
            onChange1_slider(e);
          }}
          id="slider-1"
        />
        <input
          type="range"
          min="50"
          max="1500"
          value={slider_two_value}
          onChange={(e) => {
            onChange2_slider(e);
          }}
          id="slider-2"
        />
      </div>
    </div>
  );
};

export default Budget;
