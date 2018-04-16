package com.react;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.react.uimanager.ViewManager;
import com.react.activity.ReactWebViewManager;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Created by pc on 2018/3/7.
 */

public class RegesiterReactPackage implements ReactPackage{
    /***
     * 注册原生组件
     * @param reactContext
     * @return
     */
    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
       List<ViewManager> asList = new ArrayList<>();
        asList.add(new ReactWebViewManager());
        asList.add( new ShareModule() );
        return asList;
    }

    /***
     * 注册原生方法
     * @param reactContext
     * @return
     */
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
       List<NativeModule> modules = new ArrayList<>();
        modules.add(new AModule(reactContext));
        modules.add(new SendMessageModule(reactContext));
        modules.add( new Share(reactContext) );
        return modules;
    }

}
