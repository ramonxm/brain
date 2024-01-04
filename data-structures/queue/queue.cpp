#include <iostream>
#include <queue>

using namespace std;

int queueOfPeoples()
{
  queue<string> peoples;

  peoples.push("Ramon");
  peoples.push("Ayane");
  peoples.push("Felipe");
  peoples.push("Liliam");

  cout << "Queue size: " << peoples.size() << "\n";

  while (!peoples.empty())
  {
    cout << "First person in queue: " << peoples.front() << "\n";
    peoples.pop();
  };

  return 0;
}

int main()
{
  queueOfPeoples();

  return 0;
}