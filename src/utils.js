export const get = async (url) => {
  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};

export const post = async (url, bodyData) => {
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyData),
  });
  const data = await resp.json();

  return data;
};

export const put = async (url, bodyData) => {
  const resp = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyData),
  });
  const data = await resp.json();

  return data;
};

export const remove = async (url) => {
  const resp = await fetch(url, { method: 'DELETE' });
  const data = await resp.json();

  return data;
};

export const byUrgencyAsc = (a, b) => {
  if (a.isUrgent && b.isUrgent) {
    return 0;
  }

  if (a.isUrgent) {
    return 1;
  }

  if (b.isUrgent) {
    return -1;
  }

  return 0;
};

export const byUrgencyDesc = (a, b) => {
  if (a.isUrgent && b.isUrgent) {
    return 0;
  }

  if (a.isUrgent) {
    return -1;
  }

  if (b.isUrgent) {
    return 1;
  }

  return 0;
};
