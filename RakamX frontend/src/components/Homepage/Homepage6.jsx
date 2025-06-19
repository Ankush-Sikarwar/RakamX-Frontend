
import React ,{memo}from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterNumbers = memo(() => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="bg-black text-gray-50 py-16 px-4 ">
      <h2 className="text-4xl text-center font-semibold mb-18">Numbers That Speak</h2>

      <div className="flex gap-16 justify-center mb-15">
      
        <div className="flex flex-col items-center">
          <span className="text-6xl font-semibold mr-50">
            {inView ? <CountUp end={85} duration={2} suffix="%+" /> : 0}
          </span>
          <p>Approval Rate</p>
          <p>(Among Highest in the Industry)</p>
        </div>

      
        <div className="flex flex-col items-center">
          <span className="text-6xl font-semibold mr-50">
            {inView ? <CountUp end={0} duration={2} /> : 0}
          </span>
          <p>Documentation</p>
          <p>(No Documentation Needed)</p>
        </div>

        
        <div className="flex flex-col items-center">
          <span className="text-6xl font-semibold mr-50">
            {inView ? <CountUp end={100} duration={2} suffix="%+" /> : 0}
          </span>
          <p>White Labeled</p>
          <p>(Best Fit for Your Product)</p>
        </div>
      </div>
    </section>
  );
});

export default CounterNumbers;
