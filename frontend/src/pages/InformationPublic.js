import React from 'react';
import DashboardPublic from "../layouts/DashboardPublic";

function InformationPublic() {
    return (
        <DashboardPublic>
            <div tabIndex="0" className="collapse w-96 rounded-box border border-base-300 collapse-arrow">
                <div className="collapse-title text-xl font-medium">
                    I open with focus
                </div>
                <div className="collapse-content">
                    <p>Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox
                        instead of focus. Or you can force-open/force-close using
                        <span className="badge badge-outline">collapse-open</span> and
                        <span className="badge badge-outline">collapse-close</span> classes.
                    </p>
                </div>
            </div>
            <div tabIndex="0" className="collapse w-96 rounded-box border border-base-300 collapse-arrow">
                <div className="collapse-title text-xl font-medium">
                    I open with focus
                </div>
                <div className="collapse-content">
                    <p>Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox
                        instead of focus. Or you can force-open/force-close using
                        <span className="badge badge-outline">collapse-open</span> and
                        <span className="badge badge-outline">collapse-close</span> classes.
                    </p>
                </div>
            </div>
            <div tabIndex="0" className="collapse w-96 rounded-box border border-base-300 collapse-arrow">
                <div className="collapse-title text-xl font-medium">
                    I open with focus
                </div>
                <div className="collapse-content">
                    <p>Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox
                        instead of focus. Or you can force-open/force-close using
                        <span className="badge badge-outline">collapse-open</span> and
                        <span className="badge badge-outline">collapse-close</span> classes.
                    </p>
                </div>
            </div>
        </DashboardPublic>
    );
}

export default InformationPublic;