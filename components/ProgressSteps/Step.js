import React, { PropTypes } from 'react';
import cx from 'classnames';

import LeftRight from '../LeftRight/LeftRight';
import StepIcon from '../StepIcon/StepIcon';
import m from '../../globals/modifiers.css';
import defaultCss from './ProgressSteps.css';

const Step = (props) => {
  const {
    step,
    completed,
    title,
    children,
    css,
    ...rest,
  } = props;

  const leftClassName = cx(
    m.valignt,
    defaultCss.stepIconContainer,
    css.stepIconContainer,
    completed ? defaultCss.stepIconContainerCompleted : null,
    completed ? css.stepIconContainerCompleted : null,
  );

  const rightClassName = cx(
    m.valignt,
    defaultCss.stepContent,
    css.stepContent,
    completed ? defaultCss.stepContentCompleted : null,
    completed ? css.stepContentCompleted : null,
  );

  const stepIconClassName = cx(
    defaultCss.stepIcon,
    css.stepIcon,
    completed ? defaultCss.stepIconCompleted : null,
    completed ? css.stepIconCompleted : null,
  );

  const stepTitleClassName = cx(
    defaultCss.stepTitle,
    css.stepTitle,
    completed ? defaultCss.stepTitleCompleted : null,
    completed ? css.stepTitleCompleted : null,
  );

  const stepBodyClassName = cx(
    defaultCss.stepBody,
    css.stepBody,
    completed ? defaultCss.stepBodyCompleted : null,
    completed ? css.stepBodyCompleted : null,
  );

  return (
    <LeftRight
      { ...rest }
      className={ cx(defaultCss.step, css.step) }
      leftClassName={ leftClassName }
      rightClassName={ rightClassName }
      leftChildren={
        <StepIcon
          circleClassName={ css.stepIconCircle }
          className={ stepIconClassName }
          completed={ completed }
        >
          { step }
        </StepIcon>
      }
      rightChildren={
        <div>
          <dt className={ stepTitleClassName }>{ title }</dt>
          <dd className={ stepBodyClassName }>{ children }</dd>
        </div>
      }
      primarySide="right"
    />
  );
};

Step.propTypes = {
  step: PropTypes.node.isRequired,
  completed: PropTypes.bool,
  title: PropTypes.node,
  children: PropTypes.node,
  css: PropTypes.shape({
    stepIconContainer: PropTypes.string,
    stepIconContainerCompleted: PropTypes.string,
    stepIcon: PropTypes.string,
    stepIconCompleted: PropTypes.string,
    stepTitle: PropTypes.string,
    stepTitleCompleted: PropTypes.string,
    stepBody: PropTypes.string,
    stepBodyCompleted: PropTypes.string,
  }),
};

Step.defualtProps = {
  css: {
    stepIconContainer: '',
    stepIconContainerCompleted: '',
    stepIcon: '',
    stepIconCompleted: '',
    stepTitle: '',
    stepTitleCompleted: '',
    stepBody: '',
    stepBodyCompleted: '',
  },
};

export default Step;