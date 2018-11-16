import {
  LOAD_RESOURCE,
  LOAD_RESOURCE_COMPLETED,
  LOAD_RESOURCE_ERROR,
} from './constants';

export function loadResource() {
  return {
    type: LOAD_RESOURCE,
  };
}

export function loadResourceCompleted(resource) {
  return {
    type: LOAD_RESOURCE_COMPLETED,
    resource,
  };
}

export function loadResourceError() {
  return {
    type: LOAD_RESOURCE_ERROR,
  };
}
