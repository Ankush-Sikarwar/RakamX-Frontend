// app.jsx
import React from "react";
// make sure to adjust the path to your components
import { BentoGrid, BentoGridItem } from "../ui/bentogrid";

function Grid() {
  return (
    <div className="p-10">
      {/* You can apply custom className if needed */}
      <BentoGrid className="bg-black">
        <BentoGridItem
          title="Dashboard"
          description="Analyze your data at a glance."
          icon={<span>📊</span>}
          header={<img src="/img/dashboard.jpg" alt="Dashboard" />}
        />

        <BentoGridItem
          title="Settings"
          description="Adjust your preferences here."
          icon={<span>⚙</span>}
          header={<img src="/img/settings.jpg" alt="Settings" />}
        />

        <BentoGridItem
          title="Profile"
          description="View and edit your profile."
          icon={<span>👤</span>}
          header={<img src="/img/profile.jpg" alt="Profile" />}
        />
      </BentoGrid>
    </div>
  );
}

export default Grid;
