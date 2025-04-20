import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor dbank {
  stable var bankBalance : Float = 100;

  stable var startTime = Time.now();

  public query func showBalance() : async Float {
    return bankBalance;
  };

  public func deposit(amount : Float) {
    bankBalance += amount;
    Debug.print(debug_show (bankBalance));
  };

  public func withdrawl(amount : Float) {
    bankBalance -= amount;
    Debug.print(debug_show (bankBalance));
  };

  public func empty() {
    bankBalance :=0;
    Debug.print(debug_show (bankBalance));
  };

  public func compound() {
    var currentTime = Time.now();
    var timeElapsedNS = currentTime - startTime;
    var timeElapsedS = timeElapsedNS / 1000000000;

    bankBalance := bankBalance * (1.01 ** Float.fromInt(timeElapsedS));
    startTime := currentTime;

  };
};
