export const rotationHeadAction = (value:string) => (
  { type: 'HEAD_ROTATION_ACTION', rotation: value });

export const inclinationHeadAction = (value:string) => (
  { type: 'HEAD_INCLINATION_ACTION', inclination: value });
