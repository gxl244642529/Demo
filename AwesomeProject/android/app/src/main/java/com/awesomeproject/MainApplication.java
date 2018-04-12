package com.awesomeproject;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.mob.MobSDK;
import com.react.RegesiterReactPackage;

import java.util.Arrays;
import java.util.List;

import cn.smssdk.EventHandler;
import cn.smssdk.SMSSDK;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new RegesiterReactPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);

    MobSDK.init(this);

  }
  public void sendCode(String country, String phone) {
    // 注册一个事件回调，用于处理发送验证码操作的结果
    SMSSDK.registerEventHandler(new EventHandler() {
      public void afterEvent(int event, int result, Object data) {
        if (result == SMSSDK.RESULT_COMPLETE) {
          // TODO 处理成功得到验证码的结果
          // 请注意，此时只是完成了发送验证码的请求，验证码短信还需要几秒钟之后才送达
        } else{
          // TODO 处理错误的结果
        }

      }
    });
    // 触发操作
    SMSSDK.getVerificationCode(country, phone);
  }
}
